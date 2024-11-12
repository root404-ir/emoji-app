import { useState } from "react"
import EmojiList from '../EMOJI-ITEM.json'
import '../assets/style/emojiSearch.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const Emoji = () => {
    const [searchItem, setSearchItem] = useState('')
    const [copySatus,setCopyStatus] = useState('کپی')

    const handleSearch = (e) => {
        setSearchItem(e.target.value)
    }
    const filterEmoji = EmojiList.filter(emoji => (
        emoji.title.toLowerCase().includes(searchItem.toLowerCase())
    ))
    const Copy = (emojiSymbol) => {
        navigator.clipboard.writeText(emojiSymbol).then(() => {
            setCopyStatus('کپی شد')
            setTimeout(()=>{
                setCopyStatus('کپی')
            },2000)
        }).catch(err => {
            console.error("خطا در کپی کردن ایموجی:", err)
        })

    }
    return (
        <div>
            <div className="input">
                <h2>جستجوی ایموجی</h2>
                <input type="text" placeholder="جستجوی ایموجی" value={searchItem} onChange={handleSearch} />
            </div>
            <ul>
                {filterEmoji.map(e => (
                    <div >
                        <li className="emoji-container">
                            {e.symbol} {e.title}
                            <div className="icon">
                                <FontAwesomeIcon icon={faCopy} onClick={() => Copy(e.symbol)} />
                                <div className="copy">
                                    <span>{copySatus}</span>
                                </div>
                            </div>
                        </li>
                    </div>

                ))}
            </ul>
        </div>
    )
}
export default Emoji