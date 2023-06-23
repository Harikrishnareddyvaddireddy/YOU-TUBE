import { useState } from 'react';
function SearchBar(props) {

    const [searchTerm, setSearchTerm] = useState('');

    const search = (event) => {
        event.preventDefault();
        console.log("searchterm", searchTerm);
        props.onSearchtermChange(searchTerm);
    }

    return (
<nav className="youtube-navbar">
  <div className="youtube-navbar-logo">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAdVBMVEX0Qzb////6+vr6///0OCn2k430MiH0QTT0PzH0MB70Oy30NSX0Lhv7xMH7wL380M35p6P3enP95uX82df81NL7ysf1Ukf/9/b0Sj793t33qqb6uLX4i4X3hH72bWTzKRP1WU71XlT87Ov2dGzzHwD3mpT1ZVz6MTpaAAADHklEQVRoge2aaXujIBDHR+OBEOvRKLlMPHb7/T/iAklqc3XxCNPdh3nVpwF/MozDMX9wcAws13It13It13It13Idx+W8FZZv3t/fV6tVIqyQFit7O5n6W/27kA1EO9F6k8uOnLu6XL56S/3q0JTAoihaniySFtwYu9jtD6p135NB2XSVn76t+DNumzbUC5hHKSGhMJhu8jGEUOqxwKPNtn3ETQkjc7CevgNhNL3j8m75SugZvez4Ndc9sJdTpbGDe8X1AyNYgMD/yi2OhrAAx6Tn8poY45Kaf3K3S2NYgOXuwuXl60O5N1LyMzc2OVwx4PjM7ahRLu1O3BxMullkD8gVNzb17V4siBV37xnmenvFXZt1s3D0WnJzapxLc8Et9FcEOlPgs0JwU20urfa/ZkmoLBXcTHsQnr9Y1dEMs0IzwdVfEwR34W7J9PAnteDqb24E13UXbRVMdXZIHOD6WUNx3cWiaKY6O+CwGcoV5MnODjaQ6H9GF650djbJ2SyBeAxXkIuSjXc2i2E3jiumOT2OTiNsB6n+TF1xVWQfRzrbS8HXf+kbriAnI9MI9WE/gSsj2xsT2XQP1RTu2DRCK8j0ez3iivhKmmCos0kGh4lc6ew0HOhscoBG/12fcAU5H5hGwgbqGbjS2eshB8qwhgFnhefcoWkkLOfiqpytnUYEd8Bu8nvukDQSrmGtjf0rd8ACOYCqwZWRXc1/CtDgivj6PTt41vFizS9WPGN9v/90vhqRn7HWI6z1F2u/gbW/wtpPYu2fsc4LWOcjrPMg1vkX67zP9d016/0Gyn1OiHh/hXVfh3U/iXUfi3X/jHXfjlZfwKqntMbrR+2pXqb/Bc9il3oZWn2Ql+bKv1/roc4Op/6LVu92Epz6vuP4kSFsdKVncNzOTPIIumv9hsMzI3qV7EavIkUNYfDSlSkkLNw+0AU57e6DeEzpkcIZ9UhSkCQfSz4e65GUt6X+Krvor6Iv+qs7BdZj+dW5bd+RkXX9kX2rv7qzT8FZrzjrBWd3erNebbbJcyU34988+wfq6yzXci3Xci3Xci33P+P+AVQlTbSQi9gXAAAAAElFTkSuQmCC" alt="YouTube Logo" className="youtube-logo" />
    <h1 className="youtube-logo-text">YouTube</h1>
  </div>
  <div className="youtube-navbar-search">
    <input type="text" placeholder="Search" className="youtube-search-input" onChange={(event) => {
                    setSearchTerm(event.target.value);
                }} />
    <button  onClick={search} className="youtube-search-button">Search</button>
  </div>
</nav>
    )

}
export default SearchBar;

