export const setCookie = (req, res) => {
  // cookie 7 days
  res.cookie('my cookie name', 'my cookie', {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
    // secure: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
    // expires: new Date("2022-12-31"),
  })
  const cookie = req.cookies
  console.log(cookie)
  res.send('Hello World 3!')
}

export const getCookie = (req, res) => {
  console.log(req.cookies)
  res.send('reading cookies')
}

export const deleteCookie = (req, res) => {
  console.log(req.cookies)
  res.clearCookie('my cookie name')
  res.send('deleting cookies')
}
