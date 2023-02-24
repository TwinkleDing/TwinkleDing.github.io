import{M as m}from"./bpmn-js.d547fd4f.js";import{_ as n}from"./index.9cb2bb20.js";import{d as p,x as r,o as s,c as d,a}from"./@vue.669e5f5d.js";import"./inherits-browser.72a78a64.js";import"./ids.4153fd02.js";import"./min-dash.9e14f76b.js";import"./min-dom.bb3c67f4.js";import"./tiny-svg.77613367.js";import"./bpmn-moddle.5f62ef14.js";import"./moddle.0cd348fe.js";import"./moddle-xml.8995a9c5.js";import"./saxen.5fb7da93.js";import"./diagram-js.5bb9cb39.js";import"./didi.552c89ce.js";import"./hammerjs.10ef2fb3.js";import"./css.escape.b67b94cf.js";import"./@intlify.7d747563.js";import"./clsx.09c75e33.js";import"./htm.51e0fc2f.js";import"./preact.bf92c9ee.js";import"./path-intersection.5cedc0f7.js";import"./object-refs.18ea5c37.js";import"./diagram-js-direct-editing.1e351e62.js";import"./vuex.a200b86a.js";import"./element-plus.a41b0bbd.js";import"./@vueuse.fb085ff4.js";import"./dayjs.810e77a2.js";import"./lodash-es.b8baee12.js";import"./async-validator.5d25c98b.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.1c4ac15a.js";import"./vue-router.e1605198.js";import"./axios.e9656f83.js";import"./nprogress.1a08f112.js";import"./vue-i18n.4281b29d.js";import"./vue.d4014e03.js";const c=`<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="5.1.2">
<process id="Process_1" isExecutable="false">
</process>
<bpmndi:BPMNDiagram id="BpmnDiagram_1">
    <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1">
    <bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut">
        <omgdc:Bounds x="152" y="102" width="36" height="36" />
        <bpmndi:BPMNLabel>
        <omgdc:Bounds x="160" y="145" width="22" height="14" />
        </bpmndi:BPMNLabel>
    </bpmndi:BPMNShape>
    <bpmndi:BPMNShape id="Task_1hcentk_di" bpmnElement="Task_1hcentk">
        <omgdc:Bounds x="240" y="80" width="100" height="80" />
    </bpmndi:BPMNShape>
    <bpmndi:BPMNEdge id="SequenceFlow_0h21x7r_di" bpmnElement="SequenceFlow_0h21x7r">
        <omgdi:waypoint x="188" y="120" />
        <omgdi:waypoint x="240" y="120" />
    </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`;const l={class:"media"},_={id:"container",ref:"container"},g=p({setup(b){let o=null;const i=async()=>{o=new m({container:"#container"});try{const t=await o.importXML(c),{warnings:e}=t;console.log(e)}catch(t){console.log(t.message,t.warnings)}};return r(()=>{i()}),(t,e)=>(s(),d("div",l,[a("div",_,null,512)]))}});var tt=n(g,[["__scopeId","data-v-101b773d"]]);export{tt as default};
