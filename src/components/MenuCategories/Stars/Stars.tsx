function Stars({ howManyStars }) {

    var type1 = 'star-fill'
    var type2 = 'star-fill'
    var type3 = 'star-fill'
    var type4 = 'star-fill'
    var type5 = 'star-fill'

    switch (howManyStars) {
        case 1:
            type2 = type3 = type4 = type5 = 'star'
            break
        case 2:
            type3 = type4 = type5 = 'star'
            break
        case 3:
            type4 = type5 = 'star'
            break
        case 4:
            type5 = 'star'
            break
        case 5:
            break
    }

    return (
        <>
            <img src={`img/${type1}.svg`} />
            <img src={`img/${type2}.svg`} />
            <img src={`img/${type3}.svg`} />
            <img src={`img/${type4}.svg`} />
            <img src={`img/${type5}.svg`} />
        </>
    )
}

export default Stars