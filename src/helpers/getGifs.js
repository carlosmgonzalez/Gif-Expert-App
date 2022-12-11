
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=AC9fwEa6ppzL7SknQ61SKTKGNDT1F5Jb&q=${category}&limit=10`

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gif = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    ))

    return gif
};