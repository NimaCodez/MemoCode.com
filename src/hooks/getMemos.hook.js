async function FetchData(url) {
    let backendData = await fetch(url).then(res =>  res.json())
    return backendData;
}

export default FetchData;
