const servers = {
  facebook: [{ username: "turbo-booster", isOnline: true }],
  discord: [
    { username: "mailbox_2", isOnline: true },
    { username: "Leanne", isOnline: false }
  ],
  twitter: [
    { username: "panda_321", isOnline: true },
    { username: "motor_bike5", isOnline: true }
  ],
  instagram: [
    { username: "goldenapple", isOnline: false },
    { username: "violin_91", isOnline: true },
    { username: "hillsam", isOnline: true },
    { username: "monosurfer", isOnline: true }
  ]
}

const getStatusText = (users) => {
  const onlineUsers = users.filter((user) => user.isOnline)
  const onlineUsernames = onlineUsers.map((user) => user.username)

  if (onlineUsers.length === 0) {
    return "No one online"
  } else if (onlineUsers.length === 1) {
    return `${onlineUsernames[0]} online`
  } else if (onlineUsers.length === 2) {
    return `${onlineUsernames[0]} and ${onlineUsernames[1]} online`
  } else {
    const remainingCount = onlineUsers.length - 2
    return `${onlineUsernames[0]}, ${onlineUsernames[1]} ${remainingCount} more online`
  }
}

console.log("User status:")
for (const [serverName, serverUsers] of Object.entries(servers)) {
  console.log(`${serverName.toUpperCase()}: ${getStatusText(serverUsers)}`)
}
