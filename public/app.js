fetchapi()

async function fetchapi() {
    const res = await fetch('/api/games')
    const data = await res.json()

    RenderTable(data)
    function RenderTable(json) {
        document.querySelector('#parent').innerHTML = `
    <table>
        <tr>
            <th>
                Name
            </th>
            <th>
                Genre
            </th>
            <th>
                Year
            </th>
            <th>
                Publisher
            </th> 
        <tr>
        ${json.map(games => `<tr>
        <td>${games.name}</td>
        <td>${games.genre}</td>
        <td>${games.release_date.substring(0, 4)}</td>
        <td>${games.publisher}</td>
        </tr>
        `
        ).join('')}
    </table>
    `
    }
}