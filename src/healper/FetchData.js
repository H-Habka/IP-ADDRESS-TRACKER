



export const getData = async(ip= '8.8.8.8') =>{
    let response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_P73XRBEkqoKGCVaXGeZ981cIbDjBK&ipAddress=${ip}`)
    return await response.json()

}
