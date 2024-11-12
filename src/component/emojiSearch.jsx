import { useState } from "react"
import EmojiList from '../EMOJI-ITEM.json'
import '../assets/style/emojiSearch.css'
const Emoji = () => {
    const [searchItem, setSearchItem] = useState('')

    const handleSearch = (e) => {
        setSearchItem(e.target.value)
    }
    const filterEmoji = EmojiList.filter(emoji => (
        emoji.title.toLowerCase().includes(searchItem.toLocaleLowerCase())
    ))
    return (
        <div>
            <h2>جستجوی ایموجی</h2>
            <input type="text" placeholder="جستجوی ایموجی" value={searchItem} onChange={handleSearch} />
            <ul>
                {filterEmoji.map(e => (
                    <li>
                        {e.symbol}
                        {e.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Emoji