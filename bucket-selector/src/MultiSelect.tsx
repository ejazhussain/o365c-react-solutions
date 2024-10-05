import React, { useEffect, useRef, useState } from 'react';
import { NestedSelect } from "multi-nested-select";

const MultiSelect: React.FC = () => {

    const ref = React.useRef<HTMLDivElement>(null);
    const [response, setResponse] = useState([]);
    const data = [
        // {
        //   name: "Afghanistan",
        //   code: "AF",          
        //   zones: [],
        //   disable: true,          
        //   continent: "Asia",
        //   provinceKey: "REGION"
        // }      
    ];
    const customList = [
        {
            name: "Policies",
            code: "pol",
            disabled: false,
            zones: [
                {
                    code: "C",                   
                    name: "HR Policies"
                },
                {
                    code: "D",                    
                    name: "IT Policies"
                },
                {
                    code: "E",                    
                    name: "Finance Policies"
                },
                {
                    code: "F",                   
                    name: "Admin Policies"
                },
                {
                    code: "G",
                    name: "Marketing Policies"
                }


            ],
            continent: "Policies",
            provinceKey: "POLICIES"
           
        },
        {
            name: "Technical Guides",
            code: "tg",
            zones: [],
            disable: false,
            continent: "Technical Guides",
        },
        {
            name: "Case Studies",
            code: "cs",
            zones: [],
            disable: false,
            continent: "Case Studies",
        },
        {
            name: "Research Documents",
            code: "rd",
            zones: [],
            disable: false,
            continent: "Research",
        },
        {
            name: "Specifications",
            code: "sp",
            zones: [],
            disable: false,
            continent: "Specifications",
        }
    ];
    const callbackFUnction = (value: any) => {
        console.log(value);
        setResponse(value);
    };

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                // alert("sving fat");
            }
        };
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    });

    return (
        <div className="App">
            <hr className="hr_dm" />
            <h1>Multi Nested Select Component</h1>
            <div className="center-component" ref={ref}>
                <NestedSelect
                    showCustomList={customList}
                    buttonContent="Save"
                    enableButton={true}
                    //   state={false}
                    width={500}
                    height={600}
                    leading={true}
                    // chip={true}
                    // limit={5}
                    placeholderCtx={true}
                    trailing={true}
                    trailingIcon={true}
                    inputClass="myCustom_text"
                    continent={true}
                    //   selectAllOption={true}
                    dropDownClass="myCustom_dropbox"
                    selectedValue={data}
                    onViewmore={(v) => alert("viewed")}
                    onChipDelete={(v) => alert("deleted")}
                    onChange={(v) => console.log("okay", v)}
                    callback={(val) => callbackFUnction(val)}
                />
            </div>
            <h1>Selected Country-state</h1>
            <p>
                **(Not part of package only for showing response getting from package)
            </p>
            <div>
                <table className="center-table">
                    <thead>
                        <tr>
                            <th>Sr.</th>
                            <th>Country Name</th>
                            <th>Country Code</th>
                            <th>State</th>
                            <th>State code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {response &&
                            response.map((data, i) => (
                                <tr key={i}>
                                    <td>{i + 1} .</td>
                                    <td>{data.name}</td>
                                    <td>{data.code}</td>
                                    <td>
                                        {data.zones?.length > 0
                                            ? data.zones.map((item, j) => (
                                                <tr key={j}>
                                                    <td>
                                                        {j + 1}. {item.name}
                                                    </td>
                                                </tr>
                                            ))
                                            : "-"}
                                    </td>
                                    <td>
                                        {data.zones?.length > 0
                                            ? data.zones.map((item, j) => (
                                                <tr key={j}>
                                                    <td>{item.code}</td>
                                                </tr>
                                            ))
                                            : "-"}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MultiSelect;