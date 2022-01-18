import React from "react";
import { CustomInput } from "../UI/input/CustomInput";
import { CustomSelect } from "../UI/select/CustomSelect";

export const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <CustomInput
                placeholder='Поиск...'
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                type="text"
            />
            <CustomSelect
                defaultValue='Сортировка по'
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' }
                ]}
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
            />
        </div>
    )
}