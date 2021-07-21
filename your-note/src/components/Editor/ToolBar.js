import React, { useState } from "react"
import styled from "styled-components"

import socket from "../../providers/socket"
import RichTextTools from "./RichTextTools"

const ToolBar = () => {
  return (
    <ToolWrapper>
      <ToolBarContainer>
        <RichTextTools />
        <UserSection />
      </ToolBarContainer>
    </ToolWrapper>
  )
}

const UserSection = () => {
  const [modal, setModal] = useState(false)
  const [users, setUsers] = useState([])

  socket.on("users-update", data => {
    console.log(data)
    setUsers(data)
  })

  const handleShowModal = () => {
    console.log("mouse enter")
    setModal(true)
  }

  const handleHideModal = () => {
    console.log("mouse leave")
    setModal(false)
  }

  return (
    <UserSectionContainer
      onMouseEnter={handleShowModal}
      onMouseLeave={handleHideModal}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="40px"
        fill="#706E6E"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
      <UserModal modal={modal} users={users} />
      <UsersIndicator>
        <p style={{ fontSize: 12 }}>{users.length}</p>
      </UsersIndicator>
    </UserSectionContainer>
  )
}

const UserModal = ({ modal, users }) => {
  return (
    <UserModalContainer visible={modal}>
      {users.map(user => (
        <SingleUser userId={user} />
      ))}
    </UserModalContainer>
  )
}

const SingleUser = ({ userId }) => (
  <UserBox>
    <p>{userId.slice(0, 10)}</p>
  </UserBox>
)

const ToolWrapper = styled.aside`
  display: flex;
  position: fixed;
  width: inherit;
  max-width: inherit;
  height: 70px;
  bottom: 0;
  align-items: stretch;
  justify-content: center;
`

const ToolBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px -5px 17px #00000036;
  background-color: #fff;
  width: 80%;
  border-radius: 20px 20px 0 0;
  padding: 0 35px;
`
const UserSectionContainer = styled.section`
  display: flex;
  flex-direction: row;
  position: relative;
`

const UserModalContainer = styled.ul`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
  box-shadow: 1px -5px 17px #00000036;
  position: absolute;
  background-color: #fff;
  border: 1px solid #000;
  bottom: 40px;
  left: -50%;
  border-radius: 10px;
  min-width: 250px;
  min-height: 15px;
  list-style-type: none;
  align-items: center;
  padding: 5px;
`

const UserBox = styled.li`
  display: flex;
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid gray;
  padding: 5px 0;

  &:last-child {
    border: none;
  }
`

const UsersIndicator = styled.div`
  display: flex;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #185adb;
  position: absolute;
  right: 0;
  bottom: 0;
  color: #fff;
  justify-content: center;
  align-items: center;
`

export default ToolBar
