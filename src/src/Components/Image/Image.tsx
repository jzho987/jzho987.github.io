interface Props {
    ImageSrc?: string,
    Height?: number,
    Width?: number,
    AltText?: string,
}

export default function Image(props: Props) {
    return(
        <img
            src={props.ImageSrc ?? `https://picsum.photos/${props.Width}/${props.Height ?? 300}`}
            alt={props.AltText ?? "image"} width={props.Width} height={props.Height}/>
    )
}
