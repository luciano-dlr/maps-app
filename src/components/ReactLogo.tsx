import ReactIconSvg from "../assets/react.svg"

export const ReactLogo = () => {
    return (
        <img src={ReactIconSvg} alt="Icon React" style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            width: '50px'
        }} />
    )
}
