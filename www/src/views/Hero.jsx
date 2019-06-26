// vendors
import React, { Component } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import VisuallyHidden from "@reach/visually-hidden"

import { colors } from "./../styles/variables"

import VectorBoudin from "../images/vector-boudon.svg"
import WordBoudin from "../images/boudin.svg"
import WordSaucisson from "../images/saucisson.svg"
import WordQuenelle from "../images/quenelle.svg"
import WordBacon from "../images/bacon.svg"
import WordSaucisses from "../images/saucisses.svg"
import WordPates from "../images/pates.svg"
import WordCharcuteries from "../images/charcuteries.svg"

const FloatingSausage = styled.img`
  position: fixed;
  top: 10vh;
  width: 80vw;
  transform-origin: center center;

  @media (min-width: 769px) {
    width: ${(316 / 792) * 100}vw;
  }
`

const KingSection = styled.div`
  padding: 20px 0 110px;

  h1,
  h2 {
    font-size: 2em;
    margin-bottom: 1em;
  }
`

class Hero extends Component {
  constructor(props) {
    super(props)

    this.state = { containerHeight: 0, innerHeight: 0, lastKnowScroll: 0 }

    this.myContainer = React.createRef()

    this.handleScroll = this.handleScroll.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    window.addEventListener("resize", this.handleResize)

    this.handleResize()
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
    window.removeEventListener("resize", this.handleResize)
  }

  handleScroll() {
    this.setState({ lastKnowScroll: window.scrollY })
  }

  handleResize() {
    this.setState({
      containerHeight: this.myContainer.current.scrollHeight,
      lastKnowScroll: window.scrollY,
      innerHeight: window.innerHeight,
    })
  }

  render() {
    const { containerHeight, innerHeight, lastKnowScroll } = this.state
    const delta = lastKnowScroll / (containerHeight + innerHeight)

    return (
      <div
        css={css`
          background-color: ${colors.primary};
          background-image: linear-gradient(
              ${colors.secondary} 2px,
              transparent 2px
            ),
            linear-gradient(90deg, ${colors.secondary} 2px, transparent 2px);
          color: ${colors.white};
          position: relative;
          text-align: center;
          background-position-x: -1px;
          background-size: 20vw 20vw;
        `}
        ref={this.myContainer}
      >
        <FloatingSausage
          src={VectorBoudin}
          css={css`
            left: ${50 - 40}vw;
            z-index: 2;

            @media (min-width: 769px) {
              left: ${25 - (316 / 792) * 50}vw;
              opacity: 1;
            }
          `}
          style={{
            transform: `translateY(${delta * 100}%)
              rotate(${315 + 100 * delta}deg)`,
          }}
        />
        <FloatingSausage
          src={VectorBoudin}
          css={css`
            right: ${50 - 40}vw;
            z-index: 4;
            opacity: 0;

            @media (min-width: 769px) {
              right: ${25 - (316 / 792) * 50}vw;
              opacity: 1;
            }
          `}
          style={{
            transform: `translateY(${delta * 100}%)
              rotate(-${235 + 175 * delta}deg)`,
          }}
        />
        <KingSection className="container">
          <h1
            className="roi__title"
            css={css`
              z-index: 5;
              position: relative;
            `}
          >
            Le roi
            <br />
            du
            <br />
            <VisuallyHidden>boudin</VisuallyHidden>
          </h1>
          <img
            src={WordBoudin}
            alt="Le roi du boudin"
            css={css`
              z-index: 3;
              position: relative;
            `}
          />
        </KingSection>
        <KingSection className="container">
          <h2 className="roi__title">
            du
            <br />
            <VisuallyHidden>saucisson</VisuallyHidden>
          </h2>
          <img
            src={WordSaucisson}
            alt="Le roi du saucisson"
            css={css`
              z-index: 5;
              position: relative;
            `}
          />
        </KingSection>
        <KingSection className="container">
          <h2 className="roi__title">
            de la
            <br />
            <VisuallyHidden>quenelle</VisuallyHidden>
          </h2>
          <img
            src={WordQuenelle}
            alt="Le roi de la quenelle"
            css={css`
              z-index: 5;
              position: relative;
            `}
          />
        </KingSection>
        <KingSection className="container">
          <h2 className="roi__title">
            du
            <br />
            <VisuallyHidden>bacon</VisuallyHidden>
          </h2>
          <img
            src={WordBacon}
            alt="Le roi du bacon"
            css={css`
              z-index: 3;
              position: relative;
            `}
          />
        </KingSection>
        <KingSection className="container">
          <h2 className="roi__title">
            des
            <br />
            <VisuallyHidden>saucisses</VisuallyHidden>
          </h2>
          <img
            src={WordSaucisses}
            alt="Le roi du bacon"
            css={css`
              z-index: 3;
              position: relative;
            `}
          />
        </KingSection>
        <KingSection className="container">
          <h2 className="roi__title">
            des
            <br />
            <VisuallyHidden>pâtés</VisuallyHidden>
          </h2>
          <img
            src={WordPates}
            alt="Le roi des pâtés"
            css={css`
              z-index: 1;
              position: relative;
            `}
          />
        </KingSection>
        <KingSection className="container">
          <h2 className="roi__title">
            des
            <br />
            <VisuallyHidden>charcuteries</VisuallyHidden>
          </h2>
          <img
            src={WordCharcuteries}
            alt="Le roi des charcuteries"
            css={css`
              z-index: 5;
              position: relative;
            `}
          />
        </KingSection>
      </div>
    )
  }
}

// const Hero = () => {
//   const sausageContainer = useRef(null)
//   const [sausages, setSausages] = useState({
//     left: { tranlate: 0, rotate: 0 },
//     right: { tranlate: 0, rotate: 0 },
//   })

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       const delta =
//         window.scrollY / (sausageContainer.scrollHeight + window.innerHeight)

//       setSausages({
//         left: { tranlate: delta * 100, rotate: delta * 100 },
//         right: { tranlate: delta * 100, rotate: delta * 175 },
//       })
//     })
//   })

//   return (
//     <div
//       css={css`
//         background-color: ${colors.primary};
//         background-image: linear-gradient(
//             ${colors.secondary} 2px,
//             transparent 2px
//           ),
//           linear-gradient(90deg, ${colors.secondary} 2px, transparent 2px);
//         color: ${colors.white};
//         position: relative;
//         text-align: center;
//         background-position-x: -1px;
//         background-size: 20vw 20vw;
//       `}
//       ref={sausageContainer}
//     >
//       <FloatingSausage
//         src={VectorBoudin}
//         css={css`
//           left: ${50 - 40}vw;
//           transform: translateY(${sausages.left.translate}%)
//             rotate(${315 + sausages.left.rotate}deg);
//           z-index: 2;

//           @media (min-width: 769px) {
//             left: ${25 - (316 / 792) * 50}vw;
//             opacity: 1;
//           }
//         `}
//       />

//       <FloatingSausage
//         src={VectorBoudin}
//         css={css`
//           right: ${50 - 40}vw;
//           transform: translateY(${sausages.right.translate}%)
//             rotate(${235 + sausages.right.rotate * -1}deg);
//           z-index: 4;
//           opacity: 0;

//           @media (min-width: 769px) {
//             right: ${25 - (316 / 792) * 50}vw;
//             opacity: 1;
//           }
//         `}
//       />

//       <KingSection className="container">
//         <h1
//           className="roi__title"
//           css={css`
//             z-index: 5;
//             position: relative;
//           `}
//         >
//           Le roi
//           <br />
//           du
//           <br />
//           <VisuallyHidden>boudin</VisuallyHidden>
//         </h1>

//         <img
//           src={WordBoudin}
//           alt="Le roi du boudin"
//           css={css`
//             z-index: 3;
//             position: relative;
//           `}
//         />
//       </KingSection>

//       <KingSection className="container">
//         <h2 className="roi__title">
//           du
//           <br />
//           <VisuallyHidden>saucisson</VisuallyHidden>
//         </h2>

//         <img
//           src={WordSaucisson}
//           alt="Le roi du saucisson"
//           css={css`
//             z-index: 5;
//             position: relative;
//           `}
//         />
//       </KingSection>

//       <KingSection className="container">
//         <h2 className="roi__title">
//           de la
//           <br />
//           <VisuallyHidden>quenelle</VisuallyHidden>
//         </h2>

//         <img
//           src={WordQuenelle}
//           alt="Le roi de la quenelle"
//           css={css`
//             z-index: 5;
//             position: relative;
//           `}
//         />
//       </KingSection>

//       <KingSection className="container">
//         <h2 className="roi__title">
//           du
//           <br />
//           <VisuallyHidden>bacon</VisuallyHidden>
//         </h2>

//         <img
//           src={WordBacon}
//           alt="Le roi du bacon"
//           css={css`
//             z-index: 3;
//             position: relative;
//           `}
//         />
//       </KingSection>

//       <KingSection className="container">
//         <h2 className="roi__title">
//           des
//           <br />
//           <VisuallyHidden>saucisses</VisuallyHidden>
//         </h2>

//         <img
//           src={WordSaucisses}
//           alt="Le roi du bacon"
//           css={css`
//             z-index: 3;
//             position: relative;
//           `}
//         />
//       </KingSection>

//       <KingSection className="container">
//         <h2 className="roi__title">
//           des
//           <br />
//           <VisuallyHidden>pâtés</VisuallyHidden>
//         </h2>

//         <img
//           src={WordPates}
//           alt="Le roi des pâtés"
//           css={css`
//             z-index: 1;
//             position: relative;
//           `}
//         />
//       </KingSection>

//       <KingSection className="container">
//         <h2 className="roi__title">
//           des
//           <br />
//           <VisuallyHidden>charcuteries</VisuallyHidden>
//         </h2>

//         <img
//           src={WordCharcuteries}
//           alt="Le roi des charcuteries"
//           css={css`
//             z-index: 5;
//             position: relative;
//           `}
//         />
//       </KingSection>
//     </div>
//   )
// }

export default Hero
