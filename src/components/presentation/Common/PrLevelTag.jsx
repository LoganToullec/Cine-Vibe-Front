export default function PrLevelTag({prLevel, color}) {
    return(
        <div style={{backgroundColor: color}} className="p-0.5 px-2 rounded-md">
            <p className="font-bold">{prLevel}</p>
        </div>
    )
}