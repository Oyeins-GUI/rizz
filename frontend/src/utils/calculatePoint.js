const calculatePoint = (totalMintedRizz) => parseFloat(100 * Math.log10(totalMintedRizz / 1000)).toFixed(2)
export default calculatePoint
