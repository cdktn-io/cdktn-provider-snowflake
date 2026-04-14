# `catalogIntegrationObjectStorage` Submodule <a name="`catalogIntegrationObjectStorage` Submodule" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CatalogIntegrationObjectStorage <a name="CatalogIntegrationObjectStorage" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage snowflake_catalog_integration_object_storage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_object_storage

catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage(
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
  table_format: str,
  comment: str = None,
  id: str = None,
  refresh_interval_seconds: typing.Union[int, float] = None,
  timeouts: CatalogIntegrationObjectStorageTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the catalog integration is available for use for Iceberg tables. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.tableFormat">table_format</a></code> | <code>str</code> | Specifies the table format. Valid values are (case-insensitive): `ICEBERG` \| `DELTA`. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.comment">comment</a></code> | <code>str</code> | (Default: ``) Specifies a comment for the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#id CatalogIntegrationObjectStorage#id}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.refreshIntervalSeconds">refresh_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts">CatalogIntegrationObjectStorageTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the catalog integration is available for use for Iceberg tables.

`true` allows users to create new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration function normally. `false` prevents users from creating new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration cannot access the catalog in the table definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#enabled CatalogIntegrationObjectStorage#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#name CatalogIntegrationObjectStorage#name}

---

##### `table_format`<sup>Required</sup> <a name="table_format" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.tableFormat"></a>

- *Type:* str

Specifies the table format. Valid values are (case-insensitive): `ICEBERG` | `DELTA`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#table_format CatalogIntegrationObjectStorage#table_format}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.comment"></a>

- *Type:* str

(Default: ``) Specifies a comment for the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#comment CatalogIntegrationObjectStorage#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#id CatalogIntegrationObjectStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refresh_interval_seconds`<sup>Optional</sup> <a name="refresh_interval_seconds" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.refreshIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh.

For Delta-based tables, specifies the number of seconds to wait between attempts to poll your external cloud storage for new metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#refresh_interval_seconds CatalogIntegrationObjectStorage#refresh_interval_seconds}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts">CatalogIntegrationObjectStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#timeouts CatalogIntegrationObjectStorage#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.resetRefreshIntervalSeconds">reset_refresh_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#create CatalogIntegrationObjectStorage#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#delete CatalogIntegrationObjectStorage#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#read CatalogIntegrationObjectStorage#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#update CatalogIntegrationObjectStorage#update}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_refresh_interval_seconds` <a name="reset_refresh_interval_seconds" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.resetRefreshIntervalSeconds"></a>

```python
def reset_refresh_interval_seconds() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CatalogIntegrationObjectStorage resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.isConstruct"></a>

```python
from cdktn_provider_snowflake import catalog_integration_object_storage

catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import catalog_integration_object_storage

catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import catalog_integration_object_storage

catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import catalog_integration_object_storage

catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CatalogIntegrationObjectStorage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CatalogIntegrationObjectStorage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CatalogIntegrationObjectStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CatalogIntegrationObjectStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList">CatalogIntegrationObjectStorageDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList">CatalogIntegrationObjectStorageShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference">CatalogIntegrationObjectStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.refreshIntervalSecondsInput">refresh_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.tableFormatInput">table_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts">CatalogIntegrationObjectStorageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.refreshIntervalSeconds">refresh_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.tableFormat">table_format</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.describeOutput"></a>

```python
describe_output: CatalogIntegrationObjectStorageDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList">CatalogIntegrationObjectStorageDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.showOutput"></a>

```python
show_output: CatalogIntegrationObjectStorageShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList">CatalogIntegrationObjectStorageShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.timeouts"></a>

```python
timeouts: CatalogIntegrationObjectStorageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference">CatalogIntegrationObjectStorageTimeoutsOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `refresh_interval_seconds_input`<sup>Optional</sup> <a name="refresh_interval_seconds_input" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.refreshIntervalSecondsInput"></a>

```python
refresh_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `table_format_input`<sup>Optional</sup> <a name="table_format_input" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.tableFormatInput"></a>

```python
table_format_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CatalogIntegrationObjectStorageTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts">CatalogIntegrationObjectStorageTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `refresh_interval_seconds`<sup>Required</sup> <a name="refresh_interval_seconds" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.refreshIntervalSeconds"></a>

```python
refresh_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `table_format`<sup>Required</sup> <a name="table_format" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.tableFormat"></a>

```python
table_format: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CatalogIntegrationObjectStorageConfig <a name="CatalogIntegrationObjectStorageConfig" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_object_storage

catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enabled: bool | IResolvable,
  name: str,
  table_format: str,
  comment: str = None,
  id: str = None,
  refresh_interval_seconds: typing.Union[int, float] = None,
  timeouts: CatalogIntegrationObjectStorageTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the catalog integration is available for use for Iceberg tables. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.tableFormat">table_format</a></code> | <code>str</code> | Specifies the table format. Valid values are (case-insensitive): `ICEBERG` \| `DELTA`. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.comment">comment</a></code> | <code>str</code> | (Default: ``) Specifies a comment for the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#id CatalogIntegrationObjectStorage#id}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.refreshIntervalSeconds">refresh_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts">CatalogIntegrationObjectStorageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the catalog integration is available for use for Iceberg tables.

`true` allows users to create new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration function normally. `false` prevents users from creating new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration cannot access the catalog in the table definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#enabled CatalogIntegrationObjectStorage#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#name CatalogIntegrationObjectStorage#name}

---

##### `table_format`<sup>Required</sup> <a name="table_format" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.tableFormat"></a>

```python
table_format: str
```

- *Type:* str

Specifies the table format. Valid values are (case-insensitive): `ICEBERG` | `DELTA`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#table_format CatalogIntegrationObjectStorage#table_format}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

(Default: ``) Specifies a comment for the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#comment CatalogIntegrationObjectStorage#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#id CatalogIntegrationObjectStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refresh_interval_seconds`<sup>Optional</sup> <a name="refresh_interval_seconds" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.refreshIntervalSeconds"></a>

```python
refresh_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh.

For Delta-based tables, specifies the number of seconds to wait between attempts to poll your external cloud storage for new metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#refresh_interval_seconds CatalogIntegrationObjectStorage#refresh_interval_seconds}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.timeouts"></a>

```python
timeouts: CatalogIntegrationObjectStorageTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts">CatalogIntegrationObjectStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#timeouts CatalogIntegrationObjectStorage#timeouts}

---

### CatalogIntegrationObjectStorageDescribeOutput <a name="CatalogIntegrationObjectStorageDescribeOutput" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_object_storage

catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutput()
```


### CatalogIntegrationObjectStorageShowOutput <a name="CatalogIntegrationObjectStorageShowOutput" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_object_storage

catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutput()
```


### CatalogIntegrationObjectStorageTimeouts <a name="CatalogIntegrationObjectStorageTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_object_storage

catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#create CatalogIntegrationObjectStorage#create}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#delete CatalogIntegrationObjectStorage#delete}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#read CatalogIntegrationObjectStorage#read}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#update CatalogIntegrationObjectStorage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#create CatalogIntegrationObjectStorage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#delete CatalogIntegrationObjectStorage#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#read CatalogIntegrationObjectStorage#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#update CatalogIntegrationObjectStorage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CatalogIntegrationObjectStorageDescribeOutputList <a name="CatalogIntegrationObjectStorageDescribeOutputList" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_object_storage

catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CatalogIntegrationObjectStorageDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CatalogIntegrationObjectStorageDescribeOutputOutputReference <a name="CatalogIntegrationObjectStorageDescribeOutputOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_object_storage

catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.catalogSource">catalog_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.refreshIntervalSeconds">refresh_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.tableFormat">table_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutput">CatalogIntegrationObjectStorageDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_source`<sup>Required</sup> <a name="catalog_source" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.catalogSource"></a>

```python
catalog_source: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `refresh_interval_seconds`<sup>Required</sup> <a name="refresh_interval_seconds" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.refreshIntervalSeconds"></a>

```python
refresh_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `table_format`<sup>Required</sup> <a name="table_format" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.tableFormat"></a>

```python
table_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: CatalogIntegrationObjectStorageDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutput">CatalogIntegrationObjectStorageDescribeOutput</a>

---


### CatalogIntegrationObjectStorageShowOutputList <a name="CatalogIntegrationObjectStorageShowOutputList" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_object_storage

catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CatalogIntegrationObjectStorageShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CatalogIntegrationObjectStorageShowOutputOutputReference <a name="CatalogIntegrationObjectStorageShowOutputOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_object_storage

catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutput">CatalogIntegrationObjectStorageShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: CatalogIntegrationObjectStorageShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutput">CatalogIntegrationObjectStorageShowOutput</a>

---


### CatalogIntegrationObjectStorageTimeoutsOutputReference <a name="CatalogIntegrationObjectStorageTimeoutsOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_object_storage

catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts">CatalogIntegrationObjectStorageTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CatalogIntegrationObjectStorageTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts">CatalogIntegrationObjectStorageTimeouts</a>

---



