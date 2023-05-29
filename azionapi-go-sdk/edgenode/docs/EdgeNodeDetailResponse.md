# EdgeNodeDetailResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Groups** | [**[]NodeGroup**](NodeGroup.md) |  | 
**HasServices** | **bool** |  | 
**HashId** | **string** |  | 
**Id** | **int64** |  | 
**Modules** | [**EdgeNodeModules**](EdgeNodeModules.md) |  | 
**Name** | **string** |  | 

## Methods

### NewEdgeNodeDetailResponse

`func NewEdgeNodeDetailResponse(groups []NodeGroup, hasServices bool, hashId string, id int64, modules EdgeNodeModules, name string, ) *EdgeNodeDetailResponse`

NewEdgeNodeDetailResponse instantiates a new EdgeNodeDetailResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEdgeNodeDetailResponseWithDefaults

`func NewEdgeNodeDetailResponseWithDefaults() *EdgeNodeDetailResponse`

NewEdgeNodeDetailResponseWithDefaults instantiates a new EdgeNodeDetailResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGroups

`func (o *EdgeNodeDetailResponse) GetGroups() []NodeGroup`

GetGroups returns the Groups field if non-nil, zero value otherwise.

### GetGroupsOk

`func (o *EdgeNodeDetailResponse) GetGroupsOk() (*[]NodeGroup, bool)`

GetGroupsOk returns a tuple with the Groups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroups

`func (o *EdgeNodeDetailResponse) SetGroups(v []NodeGroup)`

SetGroups sets Groups field to given value.


### GetHasServices

`func (o *EdgeNodeDetailResponse) GetHasServices() bool`

GetHasServices returns the HasServices field if non-nil, zero value otherwise.

### GetHasServicesOk

`func (o *EdgeNodeDetailResponse) GetHasServicesOk() (*bool, bool)`

GetHasServicesOk returns a tuple with the HasServices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasServices

`func (o *EdgeNodeDetailResponse) SetHasServices(v bool)`

SetHasServices sets HasServices field to given value.


### GetHashId

`func (o *EdgeNodeDetailResponse) GetHashId() string`

GetHashId returns the HashId field if non-nil, zero value otherwise.

### GetHashIdOk

`func (o *EdgeNodeDetailResponse) GetHashIdOk() (*string, bool)`

GetHashIdOk returns a tuple with the HashId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHashId

`func (o *EdgeNodeDetailResponse) SetHashId(v string)`

SetHashId sets HashId field to given value.


### GetId

`func (o *EdgeNodeDetailResponse) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EdgeNodeDetailResponse) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EdgeNodeDetailResponse) SetId(v int64)`

SetId sets Id field to given value.


### GetModules

`func (o *EdgeNodeDetailResponse) GetModules() EdgeNodeModules`

GetModules returns the Modules field if non-nil, zero value otherwise.

### GetModulesOk

`func (o *EdgeNodeDetailResponse) GetModulesOk() (*EdgeNodeModules, bool)`

GetModulesOk returns a tuple with the Modules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModules

`func (o *EdgeNodeDetailResponse) SetModules(v EdgeNodeModules)`

SetModules sets Modules field to given value.


### GetName

`func (o *EdgeNodeDetailResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EdgeNodeDetailResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EdgeNodeDetailResponse) SetName(v string)`

SetName sets Name field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


