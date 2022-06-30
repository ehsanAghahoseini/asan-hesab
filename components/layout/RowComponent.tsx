import Head from "next/head";
import { ContextState } from "../context/ContextMain";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export declare type RowComponentProps = {
    title: string,
    listData: any,
    filter_key?: string,
    filter_value?: string,
}


const RowComponent: any = ({ title, listData, filter_key, filter_value }: RowComponentProps) => {
    const [mapData, setMapData] = useState([])

    useEffect(() => {
        if (listData) {
            if (filter_key && filter_value) {
                let newData: any = [];
                for (let i of listData) {
                    if (i[filter_key] == filter_value) {
                        newData.push(i)
                    }
                }
                setMapData(newData)
            }
            else {
                setMapData(listData)
            }
        }
    }, [listData])


    return (
        <>
            <div className="row-app">
                <div className="row-app-head">{title}</div>
                <div className="row-app-cont">
                    {mapData.map((item: any, index: number) =>
                        <Link key={index} href={item.link}>
                            <div  className="row-app-cont-item">
                                <div className="row-app-cont-item-inner">
                                    <div className="row-app-cont-item-inner-head">
                                        <svg x="0px" y="0px" viewBox={item.view_icon}>
                                            <use xlinkHref={item.src_icon} />
                                        </svg>
                                    </div>
                                    <span className="row-app-cont-item-inner-title">{item.name}</span>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </>
    )
}

export default RowComponent;