const Typography = ({ children, fontSize, bold }) => {
  return (
    <div style={{ fontSize: fontSize, fontWeight: bold ? "700" : "400" }}>{children}</div>
  )
}

export default Typography