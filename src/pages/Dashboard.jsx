import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/Tabcomponent';
import Search from '../components/Dashboard/Search';
import PaginationControlled from '../components/Dashboard/Pagination';

function DashboardPage() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
    const [paginatedCoins, setPaginatedCoins] = useState([]);
    const [page, setPage] = useState(1);

    const onSearchChange = (newValue) => {
        setSearch(newValue);
    };

    const filteredCoins = coins.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        axios
            .get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
            )
            .then((response) => {
                console.log("RESPONSE>>>", response.data);
                setCoins(response.data);
                setPaginatedCoins(response.data.slice(0, 10));
            })
            .catch((error) => {
                console.log("ERROR>>>", error.message);
            });
    }, []);

    const handlePageChange = (event, value) => {
        setPage(value);
        var initialCount = (value - 1) * 10;
        setPaginatedCoins(filteredCoins.slice(initialCount, initialCount + 10));
    };

    return (
        <div>
            <Header />
            <Search search={search} onSearchChange={onSearchChange} />
            <TabsComponent
                coins={search ? filteredCoins : paginatedCoins}
            />
            {!search && (
                <PaginationControlled
                    page={page}
                    handlePageChange={handlePageChange}
                />
            )}
        </div>
    );
}

export default DashboardPage;
