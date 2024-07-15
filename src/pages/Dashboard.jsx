import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/Tabcomponent';
import Search from '../components/Dashboard/Search';
import PaginationControlled from '../components/Dashboard/Pagination';
import Loader from '../components/Common/Loader';
import BackToTop from '../components/Common/BackToTop';
import { get100Coin } from '../functions/get100Coins';

function DashboardPage() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
    const [paginatedCoins, setPaginatedCoins] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const onSearchChange = (newValue) => {
        setSearch(newValue);
    };

    const filteredCoins = coins.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        const getData = async () => {
            const myCoins = await get100Coin();
            setCoins(myCoins);
            setPaginatedCoins(myCoins.slice(0, 10));
            setIsLoading(false);
        };
        getData();
    }, []);

    const handlePageChange = (event, value) => {
        setPage(value);
        const initialCount = (value - 1) * 10;
        setPaginatedCoins(filteredCoins.slice(initialCount, initialCount + 10));
    };

    return (
        <>
            <Header />
            <BackToTop />
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    <Search search={search} onSearchChange={onSearchChange} />
                    <TabsComponent coins={search ? filteredCoins : paginatedCoins} />
                    {!search && (
                        <PaginationControlled page={page} handlePageChange={handlePageChange} />
                    )}
                </div>
            )}
        </>
    );
}

export default DashboardPage;
