
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';


interface FeaturedPostProps {
    title: string;
    date: string;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ title, date }) => {
    return (
        <Card className='h-[150px] w-[250] border-4 border-orange-500 bg-slate-900 shadow-2xl'>
            <CardContent className='grid items-center justify-center h-full'>
                <div>
                <p className='text-xl font-semibold'>{title}</p>
                </div>
                <div>
                    <p className='text-md font-bold'>{date}</p>
                </div>
            </CardContent>
        </Card>
    );
};

export default FeaturedPost;
