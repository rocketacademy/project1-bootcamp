import React from "react";

export default class TrashBinIcon extends React.Component {
  render() {
    return (
      <svg className="trashcan" x="0px" y="0px" viewBox="0 0 25 24.8">
        {Number(this.props.hover) === this.props.value ? (
          <g className="trashcan-open" value={this.props.value}>
            <path
              d="M18.7,24.4H5.9L4.9,7h14.9L18.7,24.4z M7.6,22.6H17l0.8-13.7h-11L7.6,22.6z"
              value={this.props.value}
            ></path>
            <polygon
              points="13.6,10.3 13.1,21.2 14.9,21.2 15.4,10.3 "
              value={this.props.value}
            ></polygon>
            <polygon
              points="11.5,21.2 11,10.3 9.2,10.3 9.7,21.2 "
              value={this.props.value}
            ></polygon>
            <path
              d="M19.1,0.7l-4.7,0.9l-0.8-1.4L8.2,1.3L8,3l-4.7,1l0.2,4.7l17.3-3.5L19.1,0.7z 
             
             M8.8,1.9l4.4 -1.0 l0.5,0.8
             L8.7,2.8z 
             
             M5.2,6.4l0-1L18,2.8l0.3,0.9L5.2,6.4z"
              value={this.props.value}
            ></path>
          </g>
        ) : (
          <g className="trashcan-closed" value={this.props.value}>
            <path
              d="M6.8,8.8h11L17,22.6
             H7.6L6.8,8.8z 
             M4.9,7l1,17.4h12.8
             l1-17.4
             H4.9z"
              value={this.props.value}
            ></path>
            <polygon
              points="13.6,10.3 13.1,21.2 14.9,21.2 15.4,10.3 "
              value={this.props.value}
            ></polygon>
            <polygon
              points="11.5,21.2 11,10.3 9.2,10.3 9.7,21.2 "
              value={this.props.value}
            ></polygon>
            <path
              d="M20.4,4h-4.8l-0.5-1.6
             H9.5L9,4
             H4.2
             L3.5,8.6h17.6
             L20.4,4z 
             
             M9.9,3.2h4.8
             L14.9,3.9h-5.2z
             
             M5.6,6.7l0.2-1 h13l0.2,1
             H5.6z"
              value={this.props.value}
            ></path>
          </g>
        )}
      </svg>
    );
  }
}
