import ProductCard from '../components/ProductCard';
import SideBar from '../components/SideBar';
import { AiOutlineSearch } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import '../styles/pagesStyles/Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const email = "ziadtarekfa@gmail.com";
    useEffect(() => {
        fetch(`http://localhost:8000/seller/getProducts/${email}`).then((res) => {
            return res.json();
        }).then((data) => {
            setProducts(data);
        });
    }, [products]);
    return (
        <>

            {
                products &&
                <main className='home'>
                    <SideBar />
                    <div className='home-content'>
                        <div className='search_container'>
                            <AiOutlineSearch size="20" />
                            <input type="number" placeholder="Search product by id" />
                        </div>
                        <div className='products_list'>
                            {
                                products.map((product) => {
                                    return (
                                        <ProductCard product={product} />
                                    )
                                })
                            }
                        </div>

                    </div>
                </main>
            }
        </>


    );
}

export default Home;