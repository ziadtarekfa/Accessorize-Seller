import '../styles/pagesStyles/Home.css';
import ProductCard from '../components/ProductCard';
import SideBar from '../components/SideBar';
import Loading from '../components/Loading';
import { AiOutlineSearch } from 'react-icons/ai';
import { useEffect, useState } from 'react';


const Home = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);


    useEffect(() => {
        fetch('http://localhost:8000/seller/getProducts', { credentials: 'include' }).then((res) => {
            return res.json();
        }).then((data) => {
            setProducts(data);
            setTotalProducts(data);
            if (data.length < 1) {
                setIsEmpty(true);
            }
            setLoading(false);
        });
    }, []);


    const searchProduct = (e) => {
        const searchInput = e.target.value.toLowerCase();
        if (searchInput === "") {
            setProducts(totalProducts);
        }
        else {
            const searchResult = totalProducts.filter((product) => {
                return product.name.trim().toLowerCase().includes(searchInput) || product.brand.trim().toLowerCase().includes(searchInput)
                    || product.category.trim().toLowerCase().includes(searchInput)
                    || product.origin.trim().toLowerCase().includes(searchInput)
                    || product.color.trim().toLowerCase().includes(searchInput)
                    || product.description.trim().toLowerCase().includes(searchInput)
                    || product._id.trim().toLowerCase().includes(searchInput);
            });
            setProducts(searchResult);
        }
    }


    return (
        <main className='flex'>
            <SideBar />

            {
                loading ? <Loading /> :

                    isEmpty ?
                        <div className='empty_products'>No products are currently on sale</div>
                        :
                        <div className='home-content'>
                            <div className='search_container'>
                                <input className='default_input' placeholder="Search" onChange={searchProduct} />
                                <AiOutlineSearch size="15" />
                            </div>
                            <div className='products_list'>
                                {
                                    products.map((product) => {
                                        return (
                                            <ProductCard product={product} key={product._id} />
                                        )
                                    })
                                }
                            </div>
                        </div>

            }
        </main>






    );
}

export default Home;