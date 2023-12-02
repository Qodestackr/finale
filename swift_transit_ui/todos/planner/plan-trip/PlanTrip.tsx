import { useState } from 'react';
import { Star } from 'lucide-react';

import { Input } from "@core/components";

export function PlanTrip() {
    const handleStartPointChange = (e: any) => {
        setStartPoint(e.target.value);
    };

    const handleDestinationChange = (e: any) => {
        setDestination(e.target.value);
    };

    const [startPoint, setStartPoint] = useState('');
    const [destination, setDestination] = useState('');

    return (
        <div>
            <Input
                type="text"
                id="startPoint"
                value={startPoint}
                onChange={handleStartPointChange}
                placeholder="Enter starting point"
                className='text-gray-800'
            />
            <Input
                type="text"
                id="destination"
                value={destination}
                onChange={handleDestinationChange}
                placeholder="Enter destination"
                className='text-gray-800'
            />
            <div className='flex justify-start items-center gap-4'>
                <Star className='my-2' /> <span>Check Favorite Routes</span>
            </div>

        </div>
    )
}
