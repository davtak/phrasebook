import { h, render } from "preact"
import { App } from "./app"

main()


function main() {
  const appElement = document.getElementById("app")

  if (appElement !== null) {
    render(<App name="cool working" />, appElement)
  }
}