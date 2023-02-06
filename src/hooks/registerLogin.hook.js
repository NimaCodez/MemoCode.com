const postData = async (url, formData) => {
    const result = await fetch(url, {
        method: "POST",
        body: formData,
    })
    return result.json();
};

export default postData;