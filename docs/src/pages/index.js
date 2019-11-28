import React, { useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Heading, Button, useDisclosure } from "@chakra-ui/core"
import { Zoom } from "react-awesome-reveal"

// Components
import EffectsDrawer from "../components/effects-drawer"
import Layout from "../components/layout"
import Section from "../components/section"

export default ({ location }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const drawerButtonRef = useRef()

  return (
    <Layout
      location={location}
      title="Home"
      showTitle={false}
      animateHeader
      showNavbarLeftContent={false}
    >
      <EffectsDrawer
        isOpen={isOpen}
        onClose={onClose}
        drawerButtonRef={drawerButtonRef}
        location={location}
      />
      <Section>
        <Zoom triggerOnce>
          <Heading
            textAlign="center"
            size="2xl"
            fontWeight={900}
            letterSpacing="tighter"
          >
            {site.siteMetadata.title}
          </Heading>
        </Zoom>
        <Zoom direction="bottom" triggerOnce>
          <Button
            ref={drawerButtonRef}
            mt={16}
            size="lg"
            variantColor="purple"
            onClick={onOpen}
          >
            Get Started
          </Button>
        </Zoom>
      </Section>
    </Layout>
  )
}
