const InputContainer = ({labelTitle, value, type,placeholder, inputStyle, textAreaStyle, rows, cols,  inputContainerStyle, labelStyle , onInputChange}) =>  {

    return (
        <div className="input-container" style={inputContainerStyle}>
            <label style={labelStyle}>{labelTitle} <br />
            </label>
            {type === "textarea" ? (
                <textarea onChange={onInputChange} value={value} style={textAreaStyle} rows={rows} cols={cols}/>
            ) : (
                <input type={type} onChange={onInputChange} value={value} style={inputStyle}  placeholder= {placeholder} />   
            )}
        </div>
    )
}

export default InputContainer