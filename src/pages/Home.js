import ProductCard from '../components/ProductCard';
import SideBar from '../components/SideBar';
import glass from '../assets/images/glass.jpg';
import { AiOutlineSearch } from 'react-icons/ai';
import '../styles/pagesStyles/Home.css';

const Home = () => {
    const product = {
        id: 1,
        image: glass,
        brand: "Rayban",
        model: "Flex Ranch",
        price: 200
    };
    const productsList = [product, product, product, product, product, product];
    return (
        <main className='home'>
            <SideBar />
            <div className='home-content'>
                <div className='search_container'>
                    <AiOutlineSearch size="20" />
                    <input type="number" placeholder="Search product by id" ></input>
                </div>
                <div className='products_list'>
                    {
                        productsList.map((product) => {
                            return (
                                <ProductCard product={product} />
                            )
                        })
                    }
                </div>

            </div>
        </main>


    );
}

export default Home;