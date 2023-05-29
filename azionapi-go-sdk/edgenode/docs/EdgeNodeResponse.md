# EdgeNodeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Groups** | Pointer to [**[]NodeGroup**](NodeGroup.md) |  | [optional] 
**HashId** | Pointer to **string** |  | [optional] 
**Id** | **int64** |  | 
**Name** | Pointer to **string** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 

## Methods

### NewEdgeNodeResponse

`func NewEdgeNodeResponse(id int64, ) *EdgeNodeResponse`

NewEdgeNodeResponse instantiates a new EdgeNodeResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEdgeNodeResponseWithDefaults

`func NewEdgeNodeResponseWithDefaults() *EdgeNodeResponse`

NewEdgeNodeResponseWithDefaults instantiates a new EdgeNodeResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGroups

`func (o *EdgeNodeResponse) GetGroups() []NodeGroup`

GetGroups returns the Groups field if non-nil, zero value otherwise.

### GetGroupsOk

`func (o *EdgeNodeResponse) GetGroupsOk() (*[]NodeGroup, bool)`

GetGroupsOk returns a tuple with the Groups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroups

`func (o *EdgeNodeResponse) SetGroups(v []NodeGroup)`

SetGroups sets Groups field to given value.

### HasGroups

`func (o *EdgeNodeResponse) HasGroups() bool`

HasGroups returns a boolean if a field has been set.

### GetHashId

`func (o *EdgeNodeResponse) GetHashId() string`

GetHashId returns the HashId field if non-nil, zero value otherwise.

### GetHashIdOk

`func (o *EdgeNodeResponse) GetHashIdOk() (*string, bool)`

GetHashIdOk returns a tuple with the HashId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHashId

`func (o *EdgeNodeResponse) SetHashId(v string)`

SetHashId sets HashId field to given value.

### HasHashId

`func (o *EdgeNodeResponse) HasHashId() bool`

HasHashId returns a boolean if a field has been set.

### GetId

`func (o *EdgeNodeResponse) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EdgeNodeResponse) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EdgeNodeResponse) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *EdgeNodeResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EdgeNodeResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EdgeNodeResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *EdgeNodeResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetStatus

`func (o *EdgeNodeResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *EdgeNodeResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *EdgeNodeResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *EdgeNodeResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


