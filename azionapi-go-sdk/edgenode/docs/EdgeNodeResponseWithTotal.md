# EdgeNodeResponseWithTotal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Nodes** | [**[]EdgeNodeResponse**](EdgeNodeResponse.md) |  | 
**Total** | **int64** |  | 

## Methods

### NewEdgeNodeResponseWithTotal

`func NewEdgeNodeResponseWithTotal(nodes []EdgeNodeResponse, total int64, ) *EdgeNodeResponseWithTotal`

NewEdgeNodeResponseWithTotal instantiates a new EdgeNodeResponseWithTotal object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEdgeNodeResponseWithTotalWithDefaults

`func NewEdgeNodeResponseWithTotalWithDefaults() *EdgeNodeResponseWithTotal`

NewEdgeNodeResponseWithTotalWithDefaults instantiates a new EdgeNodeResponseWithTotal object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNodes

`func (o *EdgeNodeResponseWithTotal) GetNodes() []EdgeNodeResponse`

GetNodes returns the Nodes field if non-nil, zero value otherwise.

### GetNodesOk

`func (o *EdgeNodeResponseWithTotal) GetNodesOk() (*[]EdgeNodeResponse, bool)`

GetNodesOk returns a tuple with the Nodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNodes

`func (o *EdgeNodeResponseWithTotal) SetNodes(v []EdgeNodeResponse)`

SetNodes sets Nodes field to given value.


### GetTotal

`func (o *EdgeNodeResponseWithTotal) GetTotal() int64`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *EdgeNodeResponseWithTotal) GetTotalOk() (*int64, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *EdgeNodeResponseWithTotal) SetTotal(v int64)`

SetTotal sets Total field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


