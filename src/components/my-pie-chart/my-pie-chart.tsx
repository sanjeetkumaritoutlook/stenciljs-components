import { Element, Component, Host, Prop, h } from '@stencil/core';
//npm i d3
//select operator allows getting reference of the html elements which we want to use or modify.
import { select } from 'd3-selection';
//pie operator is responsible for generating the data structure and arc is the tool that allows us to generate the angles values and radio, needed to draw the chart.
import { pie, arc } from 'd3-shape';
//scaleOrdinal, quantize and interpolateCool operators help us to generate multiple colors depending on the value of each portion of the chart.
import { scaleOrdinal } from 'd3-scale';
import { quantize } from 'd3-interpolate';
import { interpolateCool } from 'd3-scale-chromatic';
@Component({
  tag: 'my-pie-chart',
  styleUrl: 'my-pie-chart.css',
  shadow: true,
})
export class MyPieChart {
  @Element() element: HTMLElement;
  @Prop() width: number = 400;
  @Prop() height: number = 400;
  @Prop() data: string = "[]"; //data to be taken in json format

  public chartData: any;

  constructor(){
    this.chartData = JSON.parse(this.data)
  }

  componentDidLoad(){
    let svg:any = select(this.element.shadowRoot.querySelectorAll(".chart")[0])
      .attr("width", this.width)
      .attr("height", this.height);
    this.buildChart(svg);
  }

  buildChart(svg){

    let radius = Math.min(this.width, this.height) / 2;
    let arcShape = arc().innerRadius(radius*0.4).outerRadius(radius-1);
    let arcShapeLabels = arc()
      .outerRadius(radius-1)
      .innerRadius(radius*0.7);

    let colorScale = scaleOrdinal()
      .domain(this.chartData.map(d => d.tag))
      .range(quantize(t => interpolateCool(t * 0.8 + 0.1), this.chartData.length).reverse());

    let pieDataStructure = pie().sort(null).value(d=>d.value)(this.chartData);
    
    svg.append("g")
      .attr("transform", `translate(${this.width/2}, ${this.height/2})`)
      .attr("stroke", "white")
      .selectAll("path")
      .data(pieDataStructure)
      .join("path")
        .attr("fill", d => colorScale(d.data.tag))
        .attr("d", arcShape)
      .on('mouseenter', function () {
        select(this).attr('class', select(this).classed("selected") ? null : "selected")
      })
      .on('mouseleave', function () {
        select(this).attr('class', select(this).classed("selected") ? null : "selected")
      })
  
    svg.append("g")
        .attr("transform", `translate(${this.width/2}, ${this.height/2})`)
        .attr("font-family", "sans-serif")
        .attr("font-size", 14)
        .attr("font-weight", 800)
        .attr("text-anchor", "middle")
      .selectAll("text")
      .data(pieDataStructure)
      .join("text")
        .attr("transform", d => 
          `translate(${arcShapeLabels.centroid(d)[0]*0.8},${arcShapeLabels.centroid(d)[1]*0.8})`
        )
        .call(text => text.append("tspan")
            .text(d => d.data.tag));
  }

  render() {
    return  (
      <Host>
        <h1> JSON format where each entry contains only tag and value (in numbers) as keys:</h1>
        <svg class="chart"/>
      </Host>
    )
  }
}
