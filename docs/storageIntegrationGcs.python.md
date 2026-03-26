# `storageIntegrationGcs` Submodule <a name="`storageIntegrationGcs` Submodule" id="@cdktn/provider-snowflake.storageIntegrationGcs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageIntegrationGcs <a name="StorageIntegrationGcs" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs snowflake_storage_integration_gcs}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_integration_gcs

storageIntegrationGcs.StorageIntegrationGcs(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enabled: bool | IResolvable,
  name: str,
  storage_allowed_locations: typing.List[str],
  comment: str = None,
  id: str = None,
  storage_blocked_locations: typing.List[str] = None,
  timeouts: StorageIntegrationGcsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether this storage integration is available for usage in stages. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.name">name</a></code> | <code>str</code> | String that specifies the identifier (i.e. name) for the integration; must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.storageAllowedLocations">storage_allowed_locations</a></code> | <code>typing.List[str]</code> | Explicitly limits external stages that use the integration to reference one or more storage locations. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the storage integration. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#id StorageIntegrationGcs#id}. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.storageBlockedLocations">storage_blocked_locations</a></code> | <code>typing.List[str]</code> | Explicitly prohibits external stages that use the integration from referencing one or more storage locations. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeouts">StorageIntegrationGcsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether this storage integration is available for usage in stages.

`TRUE` allows users to create new stages that reference this integration. Existing stages that reference this integration function normally. `FALSE` prevents users from creating new stages that reference this integration. Existing stages that reference this integration cannot access the storage location in the stage definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#enabled StorageIntegrationGcs#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.name"></a>

- *Type:* str

String that specifies the identifier (i.e. name) for the integration; must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#name StorageIntegrationGcs#name}

---

##### `storage_allowed_locations`<sup>Required</sup> <a name="storage_allowed_locations" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.storageAllowedLocations"></a>

- *Type:* typing.List[str]

Explicitly limits external stages that use the integration to reference one or more storage locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#storage_allowed_locations StorageIntegrationGcs#storage_allowed_locations}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the storage integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#comment StorageIntegrationGcs#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#id StorageIntegrationGcs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storage_blocked_locations`<sup>Optional</sup> <a name="storage_blocked_locations" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.storageBlockedLocations"></a>

- *Type:* typing.List[str]

Explicitly prohibits external stages that use the integration from referencing one or more storage locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#storage_blocked_locations StorageIntegrationGcs#storage_blocked_locations}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeouts">StorageIntegrationGcsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#timeouts StorageIntegrationGcs#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.resetStorageBlockedLocations">reset_storage_blocked_locations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#create StorageIntegrationGcs#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#delete StorageIntegrationGcs#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#read StorageIntegrationGcs#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#update StorageIntegrationGcs#update}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_storage_blocked_locations` <a name="reset_storage_blocked_locations" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.resetStorageBlockedLocations"></a>

```python
def reset_storage_blocked_locations() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a StorageIntegrationGcs resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.isConstruct"></a>

```python
from cdktn_provider_snowflake import storage_integration_gcs

storageIntegrationGcs.StorageIntegrationGcs.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import storage_integration_gcs

storageIntegrationGcs.StorageIntegrationGcs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import storage_integration_gcs

storageIntegrationGcs.StorageIntegrationGcs.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import storage_integration_gcs

storageIntegrationGcs.StorageIntegrationGcs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a StorageIntegrationGcs resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StorageIntegrationGcs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StorageIntegrationGcs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StorageIntegrationGcs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList">StorageIntegrationGcsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList">StorageIntegrationGcsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference">StorageIntegrationGcsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.storageAllowedLocationsInput">storage_allowed_locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.storageBlockedLocationsInput">storage_blocked_locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeouts">StorageIntegrationGcsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.storageAllowedLocations">storage_allowed_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.storageBlockedLocations">storage_blocked_locations</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.describeOutput"></a>

```python
describe_output: StorageIntegrationGcsDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList">StorageIntegrationGcsDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.showOutput"></a>

```python
show_output: StorageIntegrationGcsShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList">StorageIntegrationGcsShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.timeouts"></a>

```python
timeouts: StorageIntegrationGcsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference">StorageIntegrationGcsTimeoutsOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `storage_allowed_locations_input`<sup>Optional</sup> <a name="storage_allowed_locations_input" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.storageAllowedLocationsInput"></a>

```python
storage_allowed_locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_blocked_locations_input`<sup>Optional</sup> <a name="storage_blocked_locations_input" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.storageBlockedLocationsInput"></a>

```python
storage_blocked_locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | StorageIntegrationGcsTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeouts">StorageIntegrationGcsTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `storage_allowed_locations`<sup>Required</sup> <a name="storage_allowed_locations" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.storageAllowedLocations"></a>

```python
storage_allowed_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_blocked_locations`<sup>Required</sup> <a name="storage_blocked_locations" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.storageBlockedLocations"></a>

```python
storage_blocked_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageIntegrationGcsConfig <a name="StorageIntegrationGcsConfig" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_integration_gcs

storageIntegrationGcs.StorageIntegrationGcsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enabled: bool | IResolvable,
  name: str,
  storage_allowed_locations: typing.List[str],
  comment: str = None,
  id: str = None,
  storage_blocked_locations: typing.List[str] = None,
  timeouts: StorageIntegrationGcsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether this storage integration is available for usage in stages. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.name">name</a></code> | <code>str</code> | String that specifies the identifier (i.e. name) for the integration; must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.storageAllowedLocations">storage_allowed_locations</a></code> | <code>typing.List[str]</code> | Explicitly limits external stages that use the integration to reference one or more storage locations. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the storage integration. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#id StorageIntegrationGcs#id}. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.storageBlockedLocations">storage_blocked_locations</a></code> | <code>typing.List[str]</code> | Explicitly prohibits external stages that use the integration from referencing one or more storage locations. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeouts">StorageIntegrationGcsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether this storage integration is available for usage in stages.

`TRUE` allows users to create new stages that reference this integration. Existing stages that reference this integration function normally. `FALSE` prevents users from creating new stages that reference this integration. Existing stages that reference this integration cannot access the storage location in the stage definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#enabled StorageIntegrationGcs#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

String that specifies the identifier (i.e. name) for the integration; must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#name StorageIntegrationGcs#name}

---

##### `storage_allowed_locations`<sup>Required</sup> <a name="storage_allowed_locations" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.storageAllowedLocations"></a>

```python
storage_allowed_locations: typing.List[str]
```

- *Type:* typing.List[str]

Explicitly limits external stages that use the integration to reference one or more storage locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#storage_allowed_locations StorageIntegrationGcs#storage_allowed_locations}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the storage integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#comment StorageIntegrationGcs#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#id StorageIntegrationGcs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storage_blocked_locations`<sup>Optional</sup> <a name="storage_blocked_locations" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.storageBlockedLocations"></a>

```python
storage_blocked_locations: typing.List[str]
```

- *Type:* typing.List[str]

Explicitly prohibits external stages that use the integration from referencing one or more storage locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#storage_blocked_locations StorageIntegrationGcs#storage_blocked_locations}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsConfig.property.timeouts"></a>

```python
timeouts: StorageIntegrationGcsTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeouts">StorageIntegrationGcsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#timeouts StorageIntegrationGcs#timeouts}

---

### StorageIntegrationGcsDescribeOutput <a name="StorageIntegrationGcsDescribeOutput" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_integration_gcs

storageIntegrationGcs.StorageIntegrationGcsDescribeOutput()
```


### StorageIntegrationGcsShowOutput <a name="StorageIntegrationGcsShowOutput" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_integration_gcs

storageIntegrationGcs.StorageIntegrationGcsShowOutput()
```


### StorageIntegrationGcsTimeouts <a name="StorageIntegrationGcsTimeouts" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_integration_gcs

storageIntegrationGcs.StorageIntegrationGcsTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#create StorageIntegrationGcs#create}. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#delete StorageIntegrationGcs#delete}. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#read StorageIntegrationGcs#read}. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#update StorageIntegrationGcs#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#create StorageIntegrationGcs#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#delete StorageIntegrationGcs#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#read StorageIntegrationGcs#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/storage_integration_gcs#update StorageIntegrationGcs#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageIntegrationGcsDescribeOutputList <a name="StorageIntegrationGcsDescribeOutputList" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_integration_gcs

storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageIntegrationGcsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StorageIntegrationGcsDescribeOutputOutputReference <a name="StorageIntegrationGcsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_integration_gcs

storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.property.allowedLocations">allowed_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.property.blockedLocations">blocked_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.property.usePrivatelinkEndpoint">use_privatelink_endpoint</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutput">StorageIntegrationGcsDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_locations`<sup>Required</sup> <a name="allowed_locations" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.property.allowedLocations"></a>

```python
allowed_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `blocked_locations`<sup>Required</sup> <a name="blocked_locations" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.property.blockedLocations"></a>

```python
blocked_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `use_privatelink_endpoint`<sup>Required</sup> <a name="use_privatelink_endpoint" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.property.usePrivatelinkEndpoint"></a>

```python
use_privatelink_endpoint: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: StorageIntegrationGcsDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsDescribeOutput">StorageIntegrationGcsDescribeOutput</a>

---


### StorageIntegrationGcsShowOutputList <a name="StorageIntegrationGcsShowOutputList" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_integration_gcs

storageIntegrationGcs.StorageIntegrationGcsShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageIntegrationGcsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StorageIntegrationGcsShowOutputOutputReference <a name="StorageIntegrationGcsShowOutputOutputReference" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_integration_gcs

storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutput">StorageIntegrationGcsShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: StorageIntegrationGcsShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsShowOutput">StorageIntegrationGcsShowOutput</a>

---


### StorageIntegrationGcsTimeoutsOutputReference <a name="StorageIntegrationGcsTimeoutsOutputReference" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_integration_gcs

storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeouts">StorageIntegrationGcsTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StorageIntegrationGcsTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.storageIntegrationGcs.StorageIntegrationGcsTimeouts">StorageIntegrationGcsTimeouts</a>

---



