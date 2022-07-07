import React from "react"

import { IconGithub, IconLinkedin } from "../icons"

const Icon = ({ name }) => {
  switch (name) {
    case "GitHub":
      return <IconGithub />

    case "Linkedin":
      return <IconLinkedin />

    default:
      return null
  }
}

export default Icon
