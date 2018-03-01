import React from 'react'
import {
  Deck,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Slide,
  Text
} from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'
import preloader from './preloader'

const images = {
  linus: require('./assets/linus.png'),
  raspberryPi: require('./assets/raspberry-pi.jpg'),
  sxsw: require('./assets/sxsw.jpg')
}

preloader(images)

const theme = createTheme(
  {
    primary: '#fafafa',
    secondary: 'hsl(60, 1%, 16%)',
    tertiary: '#03A9FC',
    quaternary: '#ef2d5e',
    quarternary: '#f3694c',
    sxswBlue: '#1f439b'
  },
  {
    primary: {
      name: 'Lato',
      googleFont: true,
      styles: ['200', '400', '700']
    }
  }
)

const TEXT_BMARGIN = '0.25em'

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transitionDuration={420}
        theme={theme}
        progress="bar"
        controls={false}
      >
        <Slide transition={['fade']} bgColor="primary">
          <Heading textSize="1.5em" textColor="quaternary" lineHeight="1.25em">
            Exploring the Raspberry Pi Zero W
          </Heading>
          <br />
          <br />

          <Image width="60%" src={images.sxsw} />

          <br />
          <br />
          <br />

          <Text textColor="quaternary" textSize="1em">
            Ian Brennan <span className="spacer">|</span> Annie Lydens{' '}
            <span className="spacer">|</span> Zachary Walchuk
          </Text>
          <Text textColor="quaternary" textSize="1em">
            Justin Sinichko <span className="spacer">|</span> Prayash Thapa
          </Text>
        </Slide>

        <Slide transition={['slide', 'fade']}>
          <Heading textSize="2em" textAlign="left">
            Goals{' '}
            <span role="img" aria-label="goals">
              🥅
            </span>
          </Heading>
          <br />

          <Text
            textSize="1.25em"
            textAlign="left"
            textColor="secondary"
            margin="0 0 0 1em"
          >
            – Take a picture with a Raspberry Pi Zero W and display it on a
            webpage.
          </Text>

          <br />

          <Text
            textSize="1.25em"
            textAlign="left"
            textColor="secondary"
            margin="0 0 0 1em"
          >
            – Build a basic motion detector by finding differences between
            images.
          </Text>
          <br />

          <Text
            textSize="1.25em"
            textAlign="left"
            textColor="secondary"
            margin="0 0 0 1em"
          >
            – If we have time, deploy our application so we can access it from
            anywhere.
          </Text>
        </Slide>

        <Slide transition={['slide', 'fade']} align="center center">
          <Heading textSize="2em">Raspberry Pi Zero W</Heading>
          <br />
          <br />

          <Image width="60%" src={images.raspberryPi} />
          <br />
          <br />
        </Slide>

        <Slide transition={['fade']} align="center center">
          <Heading textSize="2em">Specifications</Heading>
          <br />
          <Text
            textSize="1em"
            textAlign="left"
            textColor="secondary"
            margin="0 0 .25em 1em"
          >
            – 802.11 b/g/n wireless LAN (WIFI)
          </Text>

          <Text
            textSize="1em"
            textAlign="left"
            textColor="secondary"
            margin="0 0 .25em 1em"
          >
            – Bluetooth 4.1
          </Text>
          <Text
            textSize="1em"
            textAlign="left"
            textColor="secondary"
            margin="0 0 .25em 1em"
          >
            – Bluetooth Low Energy (BLE)
          </Text>
          <Text
            textSize="1em"
            textAlign="left"
            textColor="secondary"
            margin="0 0 .25em 1em"
          >
            – 1 GHz single core CPU
          </Text>
          <Text
            textSize="1em"
            textAlign="left"
            textColor="secondary"
            margin="0 0 .25em 1em"
          >
            – 512MB RAM
          </Text>
          <Text
            textSize="1em"
            textAlign="left"
            textColor="secondary"
            margin="0 0 .25em 1em"
          >
            – HAT-Compatible 40 pin header for General Purpose Input and Output
          </Text>
          <Text
            textSize="1em"
            textAlign="left"
            textColor="secondary"
            margin="0 0 .25em 1em"
          >
            – CSI camera connector
          </Text>
        </Slide>

        <Slide transition={['slide', 'fade']} bgColor="#1f439b">
          <Heading textSize="2em" textAlign="left" textColor="primary">
            What’s running on the Raspberry Pi Zero?{' '}
            <span role="img" aria-label="think">
              🤔
            </span>
          </Heading>
          <br />

          <Text
            textSize="1em"
            textAlign="left"
            textColor="primary"
            margin="0 0 0 1em"
          >
            – Flask application that can handle HTTP Requests, process them, and
            respond with the data needed by a frontend application.
          </Text>

          <br />

          <Text
            textSize="1em"
            textAlign="left"
            textColor="primary"
            margin="0 0 0 1em"
          >
            – Taking pictures based on the HTTP requests and eventually will be
            processing a stream of images taken by the camera to detect motion
            by using a library called Pillow.
          </Text>

          <br />

          <Text
            textSize="1em"
            textAlign="left"
            textColor="primary"
            margin="0 0 0 1em"
          >
            – We will be controlling the firmware versions, debugging the
            application, and running the application with the help of the
            Resin.io application.
          </Text>
        </Slide>

        <Slide transition={['slide', 'fade']}>
          <Heading textSize="2em" textAlign="left">
            Resin <span class="img">📦</span> (<Link href="http://resin.io">
              resin.io
            </Link>)
          </Heading>
          <br />

          <Text
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – Develop iteratively. Resin gives us the ability to push code to
            our devices and run code on our devices with relative ease.
          </Text>
          <br />

          <Text
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – Makes it really easy for us to develop on the Pi without hooking
            up to a screen or coding on the Pi itself.
          </Text>
          <br />

          <Text
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – Deploy safely. Runs through our docker files and commands to make
            sure everything is safe to deploy.
          </Text>
          <br />
        </Slide>

        <Slide transition={['slide', 'fade']}>
          <Heading textSize="2em" textAlign="left">
            Docker <span class="img">🐳</span> (<Link href="http://docker.com">
              docker.com
            </Link>)
          </Heading>
          <br />

          <Text
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – Allows us to package our code into “containers” which you can
            think about as virtual computers that only have what’s necessary to
            run our code.
          </Text>
          <br />

          <Text
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – These containers can be run on any machine running Docker.
          </Text>
          <br />

          <Text
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – Creates an environment that will behave the same on any machine
            making it less of a headache to work on and manage the application
            and its dependencies.
          </Text>
          <br />
        </Slide>

        <Slide transition={['slide', 'fade']}>
          <Heading textSize="2em" textAlign="left">
            React <span class="img">⚛️</span> (<Link href="http://https://reactjs.org">
              reactjs.org
            </Link>)
          </Heading>
          <br />

          <Text
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – React is a JavaScript library for building user interfaces.
          </Text>
          <br />

          <Text
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – Lightweight and fast!
          </Text>
          <br />

          <Text
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – Allows us to modularize and simplify our front-end into components
            that are easy to understand and play with separately.
          </Text>
        </Slide>

        <Slide transition={['fade']}>
          <Heading textSize="2em" textAlign="left">
            Some Extra Resources
          </Heading>

          <List>
            <ListItem textSize="1em">
              <Link href="https://viget.com">cool-link</Link>
            </ListItem>

            <ListItem textSize="1em">
              <Link href="https://viget.com">cool-link</Link>
            </ListItem>

            <ListItem textSize="1em">
              <Link href="https://viget.com">cool-link</Link>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Image width="80%" src={images.linus} />
        </Slide>

        <Slide transition={['slide', 'fade']} bgColor="sxswBlue">
          <Heading textSize="2em" textColor="primary">
            Fin.
          </Heading>
        </Slide>
      </Deck>
    )
  }
}
