
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';


interface FeaturedPostProps {
    title: string;
    date: string;
    link: string;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ title, date, link }) => {
    return (
        <a href={link}>
        <Card className='h-[150px] w-[250] border-4 border-orange-500 dark:bg-slate-900 bg-white shadow-2xl'>
            <CardContent className='grid items-center justify-center h-full'>
                
                <div className='dark:text-white text-black'>
                    
                <p className='text-xl font-semibold'>{title}</p>
                </div>
                <div>
                    <p className='text-md font-bold'>{date}</p>
                </div>
                
            </CardContent>
        </Card>
        </a>
    );
};

export default FeaturedPost;
