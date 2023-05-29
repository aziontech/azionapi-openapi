# UpdateEdgeNodeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Groups** | [**[]NodeGroup**](NodeGroup.md) |  | 
**Id** | **int64** |  | 
**Name** | **string** |  | 
**Status** | **string** |  | 

## Methods

### NewUpdateEdgeNodeResponse

`func NewUpdateEdgeNodeResponse(groups []NodeGroup, id int64, name string, status string, ) *UpdateEdgeNodeResponse`

NewUpdateEdgeNodeResponse instantiates a new UpdateEdgeNodeResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateEdgeNodeResponseWithDefaults

`func NewUpdateEdgeNodeResponseWithDefaults() *UpdateEdgeNodeResponse`

NewUpdateEdgeNodeResponseWithDefaults instantiates a new UpdateEdgeNodeResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGroups

`func (o *UpdateEdgeNodeResponse) GetGroups() []NodeGroup`

GetGroups returns the Groups field if non-nil, zero value otherwise.

### GetGroupsOk

`func (o *UpdateEdgeNodeResponse) GetGroupsOk() (*[]NodeGroup, bool)`

GetGroupsOk returns a tuple with the Groups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroups

`func (o *UpdateEdgeNodeResponse) SetGroups(v []NodeGroup)`

SetGroups sets Groups field to given value.


### GetId

`func (o *UpdateEdgeNodeResponse) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *UpdateEdgeNodeResponse) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *UpdateEdgeNodeResponse) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *UpdateEdgeNodeResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UpdateEdgeNodeResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UpdateEdgeNodeResponse) SetName(v string)`

SetName sets Name field to given value.


### GetStatus

`func (o *UpdateEdgeNodeResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *UpdateEdgeNodeResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *UpdateEdgeNodeResponse) SetStatus(v string)`

SetStatus sets Status field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


