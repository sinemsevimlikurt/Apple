export default function Header() {
    const SearchIcon = () => {
        return (
          <div>
            <svg
              height="48"
              viewBox="0 0 17 48"
              width="17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m16.2294 29.9556-4.1755-4.0821a6.4711 6.4711 0 1 0 -1.2839 1.2625l4.2005 4.1066a.9.9 0 1 0 1.2588-1.287zm-14.5294-8.0017a5.2455 5.2455 0 1 1 5.2455 5.2527 5.2549 5.2549 0 0 1 -5.2455-5.2527z"></path>
            </svg>
          </div>
        );
      };
      
      const ShoppingBagIcon = () => {
        return (
          <div>
            <svg height="48" viewBox="0 0 17 48" width="17" xmlns="http://www.w3.org/2000/svg"><path d="m13.4575 16.9268h-1.1353a3.8394 3.8394 0 0 0 -7.6444 0h-1.1353a2.6032 2.6032 0 0 0 -2.6 2.6v8.9232a2.6032 2.6032 0 0 0 2.6 2.6h9.915a2.6032 2.6032 0 0 0 2.6-2.6v-8.9231a2.6032 2.6032 0 0 0 -2.6-2.6001zm-4.9575-2.2768a2.658 2.658 0 0 1 2.6221 2.2764h-5.2442a2.658 2.658 0 0 1 2.6221-2.2764zm6.3574 13.8a1.4014 1.4014 0 0 1 -1.4 1.4h-9.9149a1.4014 1.4014 0 0 1 -1.4-1.4v-8.9231a1.4014 1.4014 0 0 1 1.4-1.4h9.915a1.4014 1.4014 0 0 1 1.4 1.4z"></path></svg>
          </div>
        );
      };
      
     return(
        <div className="header">
            <ul className="header-list">
            <li><a href="#"><img src="../public/apple-logo.svg" alt="logo" /></a></li>
            <li><a href="#">Store</a></li>
            <li><a href="#">Mac</a></li>
            <li><a href="#">iPad</a></li>
            <li><a href="#">iPhone</a></li>
            <li><a href="#">Watch</a></li>
            <li><a href="#">AirPods</a></li>
            <li><a href="#">TV & Home</a></li>
            <li><a href="#">Entertainment</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#"><SearchIcon/></a></li>
            <li><a href="#"><ShoppingBagIcon/></a></li>
            </ul>
        </div>
     )
}