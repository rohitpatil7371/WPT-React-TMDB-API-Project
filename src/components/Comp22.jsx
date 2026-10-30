import React from 'react'
import Comp23 from './Comp23'
import Comp24 from './Comp24'

export default function Comp22() {
    return (
        <div className="border p-4">Comp22
            <div className="grid grid-cols-[25%_75%] gap-3">
                <div>
                    Left
                    <Comp23 />
                </div>
                <div>
                    Right
                    <Comp24 />
                </div>
            </div>
        </div>
    );
}
