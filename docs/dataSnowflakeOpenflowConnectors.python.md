# `dataSnowflakeOpenflowConnectors` Submodule <a name="`dataSnowflakeOpenflowConnectors` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeOpenflowConnectors <a name="DataSnowflakeOpenflowConnectors" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors snowflake_openflow_connectors}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connectors

dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  in: DataSnowflakeOpenflowConnectorsIn = None,
  like: str = None,
  limit: DataSnowflakeOpenflowConnectorsLimit = None,
  starts_with: str = None,
  with_describe: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#id DataSnowflakeOpenflowConnectors#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.startsWith">starts_with</a></code> | <code>str</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC OPENFLOW CONNECTOR for each connector returned by SHOW OPENFLOW CONNECTORS. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#id DataSnowflakeOpenflowConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.in"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#in DataSnowflakeOpenflowConnectors#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.like"></a>

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#like DataSnowflakeOpenflowConnectors#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.limit"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#limit DataSnowflakeOpenflowConnectors#limit}

---

##### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.startsWith"></a>

- *Type:* str

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#starts_with DataSnowflakeOpenflowConnectors#starts_with}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.withDescribe"></a>

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs DESC OPENFLOW CONNECTOR for each connector returned by SHOW OPENFLOW CONNECTORS.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#with_describe DataSnowflakeOpenflowConnectors#with_describe}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putIn">put_in</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putLimit">put_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetIn">reset_in</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetLike">reset_like</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetStartsWith">reset_starts_with</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetWithDescribe">reset_with_describe</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_in` <a name="put_in" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putIn"></a>

```python
def put_in(
  account: bool | IResolvable = None,
  database: str = None,
  schema: str = None
) -> None
```

###### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putIn.parameter.account"></a>

- *Type:* bool | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#account DataSnowflakeOpenflowConnectors#account}

---

###### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putIn.parameter.database"></a>

- *Type:* str

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#database DataSnowflakeOpenflowConnectors#database}

---

###### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putIn.parameter.schema"></a>

- *Type:* str

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#schema DataSnowflakeOpenflowConnectors#schema}

---

##### `put_limit` <a name="put_limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putLimit"></a>

```python
def put_limit(
  rows: typing.Union[int, float],
  from: str = None
) -> None
```

###### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putLimit.parameter.rows"></a>

- *Type:* typing.Union[int, float]

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#rows DataSnowflakeOpenflowConnectors#rows}

---

###### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putLimit.parameter.from"></a>

- *Type:* str

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#from DataSnowflakeOpenflowConnectors#from}

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_in` <a name="reset_in" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetIn"></a>

```python
def reset_in() -> None
```

##### `reset_like` <a name="reset_like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetLike"></a>

```python
def reset_like() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_starts_with` <a name="reset_starts_with" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetStartsWith"></a>

```python
def reset_starts_with() -> None
```

##### `reset_with_describe` <a name="reset_with_describe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetWithDescribe"></a>

```python
def reset_with_describe() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataSnowflakeOpenflowConnectors resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isConstruct"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connectors

dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connectors

dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformDataSource"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connectors

dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connectors

dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataSnowflakeOpenflowConnectors resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSnowflakeOpenflowConnectors to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSnowflakeOpenflowConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeOpenflowConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference">DataSnowflakeOpenflowConnectorsInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference">DataSnowflakeOpenflowConnectorsLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.openflowConnectors">openflow_connectors</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.inInput">in_input</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.likeInput">like_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.limitInput">limit_input</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.startsWithInput">starts_with_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.withDescribeInput">with_describe_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.like">like</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.startsWith">starts_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.in"></a>

```python
in: DataSnowflakeOpenflowConnectorsInOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference">DataSnowflakeOpenflowConnectorsInOutputReference</a>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.limit"></a>

```python
limit: DataSnowflakeOpenflowConnectorsLimitOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference">DataSnowflakeOpenflowConnectorsLimitOutputReference</a>

---

##### `openflow_connectors`<sup>Required</sup> <a name="openflow_connectors" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.openflowConnectors"></a>

```python
openflow_connectors: DataSnowflakeOpenflowConnectorsOpenflowConnectorsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `in_input`<sup>Optional</sup> <a name="in_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.inInput"></a>

```python
in_input: DataSnowflakeOpenflowConnectorsIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a>

---

##### `like_input`<sup>Optional</sup> <a name="like_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.likeInput"></a>

```python
like_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.limitInput"></a>

```python
limit_input: DataSnowflakeOpenflowConnectorsLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a>

---

##### `starts_with_input`<sup>Optional</sup> <a name="starts_with_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.startsWithInput"></a>

```python
starts_with_input: str
```

- *Type:* str

---

##### `with_describe_input`<sup>Optional</sup> <a name="with_describe_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.withDescribeInput"></a>

```python
with_describe_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.like"></a>

```python
like: str
```

- *Type:* str

---

##### `starts_with`<sup>Required</sup> <a name="starts_with" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

---

##### `with_describe`<sup>Required</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeOpenflowConnectorsConfig <a name="DataSnowflakeOpenflowConnectorsConfig" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connectors

dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  in: DataSnowflakeOpenflowConnectorsIn = None,
  like: str = None,
  limit: DataSnowflakeOpenflowConnectorsLimit = None,
  starts_with: str = None,
  with_describe: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#id DataSnowflakeOpenflowConnectors#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.startsWith">starts_with</a></code> | <code>str</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC OPENFLOW CONNECTOR for each connector returned by SHOW OPENFLOW CONNECTORS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#id DataSnowflakeOpenflowConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.in"></a>

```python
in: DataSnowflakeOpenflowConnectorsIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#in DataSnowflakeOpenflowConnectors#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.like"></a>

```python
like: str
```

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#like DataSnowflakeOpenflowConnectors#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.limit"></a>

```python
limit: DataSnowflakeOpenflowConnectorsLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#limit DataSnowflakeOpenflowConnectors#limit}

---

##### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#starts_with DataSnowflakeOpenflowConnectors#starts_with}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs DESC OPENFLOW CONNECTOR for each connector returned by SHOW OPENFLOW CONNECTORS.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#with_describe DataSnowflakeOpenflowConnectors#with_describe}

---

### DataSnowflakeOpenflowConnectorsIn <a name="DataSnowflakeOpenflowConnectorsIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connectors

dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn(
  account: bool | IResolvable = None,
  database: str = None,
  schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.account">account</a></code> | <code>bool \| cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.database">database</a></code> | <code>str</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.schema">schema</a></code> | <code>str</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.account"></a>

```python
account: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#account DataSnowflakeOpenflowConnectors#account}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.database"></a>

```python
database: str
```

- *Type:* str

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#database DataSnowflakeOpenflowConnectors#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.schema"></a>

```python
schema: str
```

- *Type:* str

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#schema DataSnowflakeOpenflowConnectors#schema}

---

### DataSnowflakeOpenflowConnectorsLimit <a name="DataSnowflakeOpenflowConnectorsLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connectors

dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit(
  rows: typing.Union[int, float],
  from: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.property.from">from</a></code> | <code>str</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#rows DataSnowflakeOpenflowConnectors#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.property.from"></a>

```python
from: str
```

- *Type:* str

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#from DataSnowflakeOpenflowConnectors#from}

---

### DataSnowflakeOpenflowConnectorsOpenflowConnectors <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectors" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectors.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connectors

dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectors()
```


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connectors

dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput()
```


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connectors

dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput()
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeOpenflowConnectorsInOutputReference <a name="DataSnowflakeOpenflowConnectorsInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connectors

dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetAccount">reset_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetSchema">reset_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account` <a name="reset_account" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetAccount"></a>

```python
def reset_account() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.accountInput">account_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.account">account</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_input`<sup>Optional</sup> <a name="account_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.accountInput"></a>

```python
account_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.account"></a>

```python
account: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeOpenflowConnectorsIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a>

---


### DataSnowflakeOpenflowConnectorsLimitOutputReference <a name="DataSnowflakeOpenflowConnectorsLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connectors

dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resetFrom">reset_from</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from` <a name="reset_from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.rowsInput">rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `rows_input`<sup>Optional</sup> <a name="rows_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.rowsInput"></a>

```python
rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeOpenflowConnectorsLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a>

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connectors

dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connectors

dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.connectorDefinition">connector_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.connectorUrl">connector_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersion">default_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionAlias">default_version_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionGitCommitHash">default_version_git_commit_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionLocationUri">default_version_location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionName">default_version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionSourceLocationUri">default_version_source_location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionAlias">last_version_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionGitCommitHash">last_version_git_commit_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionLocationUri">last_version_location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionName">last_version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionSourceLocationUri">last_version_source_location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.liveVersionLocationUri">live_version_location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput">DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `connector_definition`<sup>Required</sup> <a name="connector_definition" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.connectorDefinition"></a>

```python
connector_definition: str
```

- *Type:* str

---

##### `connector_url`<sup>Required</sup> <a name="connector_url" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.connectorUrl"></a>

```python
connector_url: str
```

- *Type:* str

---

##### `default_version`<sup>Required</sup> <a name="default_version" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersion"></a>

```python
default_version: str
```

- *Type:* str

---

##### `default_version_alias`<sup>Required</sup> <a name="default_version_alias" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionAlias"></a>

```python
default_version_alias: str
```

- *Type:* str

---

##### `default_version_git_commit_hash`<sup>Required</sup> <a name="default_version_git_commit_hash" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionGitCommitHash"></a>

```python
default_version_git_commit_hash: str
```

- *Type:* str

---

##### `default_version_location_uri`<sup>Required</sup> <a name="default_version_location_uri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionLocationUri"></a>

```python
default_version_location_uri: str
```

- *Type:* str

---

##### `default_version_name`<sup>Required</sup> <a name="default_version_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionName"></a>

```python
default_version_name: str
```

- *Type:* str

---

##### `default_version_source_location_uri`<sup>Required</sup> <a name="default_version_source_location_uri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionSourceLocationUri"></a>

```python
default_version_source_location_uri: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `last_version_alias`<sup>Required</sup> <a name="last_version_alias" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionAlias"></a>

```python
last_version_alias: str
```

- *Type:* str

---

##### `last_version_git_commit_hash`<sup>Required</sup> <a name="last_version_git_commit_hash" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionGitCommitHash"></a>

```python
last_version_git_commit_hash: str
```

- *Type:* str

---

##### `last_version_location_uri`<sup>Required</sup> <a name="last_version_location_uri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionLocationUri"></a>

```python
last_version_location_uri: str
```

- *Type:* str

---

##### `last_version_name`<sup>Required</sup> <a name="last_version_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionName"></a>

```python
last_version_name: str
```

- *Type:* str

---

##### `last_version_source_location_uri`<sup>Required</sup> <a name="last_version_source_location_uri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionSourceLocationUri"></a>

```python
last_version_source_location_uri: str
```

- *Type:* str

---

##### `live_version_location_uri`<sup>Required</sup> <a name="live_version_location_uri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.liveVersionLocationUri"></a>

```python
live_version_location_uri: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput">DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput</a>

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsList <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connectors

dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connectors

dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectors">DataSnowflakeOpenflowConnectorsOpenflowConnectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.describeOutput"></a>

```python
describe_output: DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.showOutput"></a>

```python
show_output: DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeOpenflowConnectorsOpenflowConnectors
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectors">DataSnowflakeOpenflowConnectorsOpenflowConnectors</a>

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connectors

dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connectors

dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.connectorDefinition">connector_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.connectorUrl">connector_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersion">default_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionAlias">default_version_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionLocationUri">default_version_location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionName">default_version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionSourceLocationUri">default_version_source_location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.liveVersionLocationUri">live_version_location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.updatedOn">updated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput">DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `connector_definition`<sup>Required</sup> <a name="connector_definition" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.connectorDefinition"></a>

```python
connector_definition: str
```

- *Type:* str

---

##### `connector_url`<sup>Required</sup> <a name="connector_url" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.connectorUrl"></a>

```python
connector_url: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `default_version`<sup>Required</sup> <a name="default_version" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersion"></a>

```python
default_version: str
```

- *Type:* str

---

##### `default_version_alias`<sup>Required</sup> <a name="default_version_alias" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionAlias"></a>

```python
default_version_alias: str
```

- *Type:* str

---

##### `default_version_location_uri`<sup>Required</sup> <a name="default_version_location_uri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionLocationUri"></a>

```python
default_version_location_uri: str
```

- *Type:* str

---

##### `default_version_name`<sup>Required</sup> <a name="default_version_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionName"></a>

```python
default_version_name: str
```

- *Type:* str

---

##### `default_version_source_location_uri`<sup>Required</sup> <a name="default_version_source_location_uri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionSourceLocationUri"></a>

```python
default_version_source_location_uri: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `live_version_location_uri`<sup>Required</sup> <a name="live_version_location_uri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.liveVersionLocationUri"></a>

```python
live_version_location_uri: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `updated_on`<sup>Required</sup> <a name="updated_on" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.updatedOn"></a>

```python
updated_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput">DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput</a>

---



