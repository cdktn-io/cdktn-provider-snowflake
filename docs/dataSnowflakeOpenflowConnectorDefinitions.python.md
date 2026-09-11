# `dataSnowflakeOpenflowConnectorDefinitions` Submodule <a name="`dataSnowflakeOpenflowConnectorDefinitions` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeOpenflowConnectorDefinitions <a name="DataSnowflakeOpenflowConnectorDefinitions" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions snowflake_openflow_connector_definitions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connector_definitions

dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions(
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
  like: str = None,
  limit: DataSnowflakeOpenflowConnectorDefinitionsLimit = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#id DataSnowflakeOpenflowConnectorDefinitions#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a></code> | limit block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#id DataSnowflakeOpenflowConnectorDefinitions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.like"></a>

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#like DataSnowflakeOpenflowConnectorDefinitions#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.limit"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#limit DataSnowflakeOpenflowConnectorDefinitions#limit}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.putLimit">put_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetLike">reset_like</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetLimit">reset_limit</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_limit` <a name="put_limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.putLimit"></a>

```python
def put_limit(
  rows: typing.Union[int, float],
  from: str = None
) -> None
```

###### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.putLimit.parameter.rows"></a>

- *Type:* typing.Union[int, float]

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#rows DataSnowflakeOpenflowConnectorDefinitions#rows}

---

###### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.putLimit.parameter.from"></a>

- *Type:* str

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#from DataSnowflakeOpenflowConnectorDefinitions#from}

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_like` <a name="reset_like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetLike"></a>

```python
def reset_like() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetLimit"></a>

```python
def reset_limit() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataSnowflakeOpenflowConnectorDefinitions resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isConstruct"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connector_definitions

dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connector_definitions

dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformDataSource"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connector_definitions

dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connector_definitions

dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataSnowflakeOpenflowConnectorDefinitions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSnowflakeOpenflowConnectorDefinitions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSnowflakeOpenflowConnectorDefinitions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeOpenflowConnectorDefinitions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference">DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.openflowConnectorDefinitions">openflow_connector_definitions</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.likeInput">like_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.limitInput">limit_input</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.like">like</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.limit"></a>

```python
limit: DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference">DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference</a>

---

##### `openflow_connector_definitions`<sup>Required</sup> <a name="openflow_connector_definitions" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.openflowConnectorDefinitions"></a>

```python
openflow_connector_definitions: DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `like_input`<sup>Optional</sup> <a name="like_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.likeInput"></a>

```python
like_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.limitInput"></a>

```python
limit_input: DataSnowflakeOpenflowConnectorDefinitionsLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.like"></a>

```python
like: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeOpenflowConnectorDefinitionsConfig <a name="DataSnowflakeOpenflowConnectorDefinitionsConfig" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connector_definitions

dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  like: str = None,
  limit: DataSnowflakeOpenflowConnectorDefinitionsLimit = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#id DataSnowflakeOpenflowConnectorDefinitions#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a></code> | limit block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#id DataSnowflakeOpenflowConnectorDefinitions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.like"></a>

```python
like: str
```

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#like DataSnowflakeOpenflowConnectorDefinitions#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.limit"></a>

```python
limit: DataSnowflakeOpenflowConnectorDefinitionsLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#limit DataSnowflakeOpenflowConnectorDefinitions#limit}

---

### DataSnowflakeOpenflowConnectorDefinitionsLimit <a name="DataSnowflakeOpenflowConnectorDefinitionsLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connector_definitions

dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit(
  rows: typing.Union[int, float],
  from: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit.property.from">from</a></code> | <code>str</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#rows DataSnowflakeOpenflowConnectorDefinitions#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit.property.from"></a>

```python
from: str
```

- *Type:* str

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#from DataSnowflakeOpenflowConnectorDefinitions#from}

---

### DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions <a name="DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connector_definitions

dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions()
```


### DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput <a name="DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connector_definitions

dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput()
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference <a name="DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connector_definitions

dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.resetFrom">reset_from</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from` <a name="reset_from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.rowsInput">rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `rows_input`<sup>Optional</sup> <a name="rows_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.rowsInput"></a>

```python
rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeOpenflowConnectorDefinitionsLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a>

---


### DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList <a name="DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connector_definitions

dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference <a name="DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connector_definitions

dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.showOutput"></a>

```python
show_output: DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions</a>

---


### DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList <a name="DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connector_definitions

dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference <a name="DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_connector_definitions

dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.categories">categories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.minRuntimeNodeType">min_runtime_node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.categories"></a>

```python
categories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_runtime_node_type`<sup>Required</sup> <a name="min_runtime_node_type" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.minRuntimeNodeType"></a>

```python
min_runtime_node_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput</a>

---



