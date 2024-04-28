import { fetchCustomers, fetchFilteredCustomers, fetchFullCustomers } from '@/app/lib/data';
import Table from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Customers | Accounts Dashboard',
};

export default async function Page() {
    const customers = await fetchFullCustomers()
    return (
            <Table customers={customers} />
    );
}