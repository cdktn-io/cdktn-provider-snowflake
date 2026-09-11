# `dataSnowflakeOpenflowRuntimes` Submodule <a name="`dataSnowflakeOpenflowRuntimes` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeOpenflowRuntimes <a name="DataSnowflakeOpenflowRuntimes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes snowflake_openflow_runtimes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_runtimes

dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes(
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
  in: DataSnowflakeOpenflowRuntimesIn = None,
  like: str = None,
  limit: DataSnowflakeOpenflowRuntimesLimit = None,
  starts_with: str = None,
  with_describe: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#id DataSnowflakeOpenflowRuntimes#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.startsWith">starts_with</a></code> | <code>str</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC OPENFLOW RUNTIME for each runtime returned by SHOW OPENFLOW RUNTIMES. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#id DataSnowflakeOpenflowRuntimes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.in"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#in DataSnowflakeOpenflowRuntimes#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.like"></a>

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#like DataSnowflakeOpenflowRuntimes#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.limit"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#limit DataSnowflakeOpenflowRuntimes#limit}

---

##### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.startsWith"></a>

- *Type:* str

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#starts_with DataSnowflakeOpenflowRuntimes#starts_with}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.withDescribe"></a>

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs DESC OPENFLOW RUNTIME for each runtime returned by SHOW OPENFLOW RUNTIMES.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#with_describe DataSnowflakeOpenflowRuntimes#with_describe}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putIn">put_in</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putLimit">put_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetIn">reset_in</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetLike">reset_like</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetStartsWith">reset_starts_with</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetWithDescribe">reset_with_describe</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_in` <a name="put_in" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putIn"></a>

```python
def put_in(
  account: bool | IResolvable = None,
  database: str = None,
  schema: str = None
) -> None
```

###### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putIn.parameter.account"></a>

- *Type:* bool | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#account DataSnowflakeOpenflowRuntimes#account}

---

###### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putIn.parameter.database"></a>

- *Type:* str

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#database DataSnowflakeOpenflowRuntimes#database}

---

###### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putIn.parameter.schema"></a>

- *Type:* str

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#schema DataSnowflakeOpenflowRuntimes#schema}

---

##### `put_limit` <a name="put_limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putLimit"></a>

```python
def put_limit(
  rows: typing.Union[int, float],
  from: str = None
) -> None
```

###### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putLimit.parameter.rows"></a>

- *Type:* typing.Union[int, float]

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#rows DataSnowflakeOpenflowRuntimes#rows}

---

###### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putLimit.parameter.from"></a>

- *Type:* str

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#from DataSnowflakeOpenflowRuntimes#from}

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_in` <a name="reset_in" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetIn"></a>

```python
def reset_in() -> None
```

##### `reset_like` <a name="reset_like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetLike"></a>

```python
def reset_like() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_starts_with` <a name="reset_starts_with" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetStartsWith"></a>

```python
def reset_starts_with() -> None
```

##### `reset_with_describe` <a name="reset_with_describe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetWithDescribe"></a>

```python
def reset_with_describe() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataSnowflakeOpenflowRuntimes resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isConstruct"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_runtimes

dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_runtimes

dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformDataSource"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_runtimes

dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_runtimes

dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataSnowflakeOpenflowRuntimes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSnowflakeOpenflowRuntimes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSnowflakeOpenflowRuntimes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeOpenflowRuntimes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference">DataSnowflakeOpenflowRuntimesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference">DataSnowflakeOpenflowRuntimesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.openflowRuntimes">openflow_runtimes</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.inInput">in_input</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.likeInput">like_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.limitInput">limit_input</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.startsWithInput">starts_with_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.withDescribeInput">with_describe_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.like">like</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.startsWith">starts_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.in"></a>

```python
in: DataSnowflakeOpenflowRuntimesInOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference">DataSnowflakeOpenflowRuntimesInOutputReference</a>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.limit"></a>

```python
limit: DataSnowflakeOpenflowRuntimesLimitOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference">DataSnowflakeOpenflowRuntimesLimitOutputReference</a>

---

##### `openflow_runtimes`<sup>Required</sup> <a name="openflow_runtimes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.openflowRuntimes"></a>

```python
openflow_runtimes: DataSnowflakeOpenflowRuntimesOpenflowRuntimesList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `in_input`<sup>Optional</sup> <a name="in_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.inInput"></a>

```python
in_input: DataSnowflakeOpenflowRuntimesIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a>

---

##### `like_input`<sup>Optional</sup> <a name="like_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.likeInput"></a>

```python
like_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.limitInput"></a>

```python
limit_input: DataSnowflakeOpenflowRuntimesLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a>

---

##### `starts_with_input`<sup>Optional</sup> <a name="starts_with_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.startsWithInput"></a>

```python
starts_with_input: str
```

- *Type:* str

---

##### `with_describe_input`<sup>Optional</sup> <a name="with_describe_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.withDescribeInput"></a>

```python
with_describe_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.like"></a>

```python
like: str
```

- *Type:* str

---

##### `starts_with`<sup>Required</sup> <a name="starts_with" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

---

##### `with_describe`<sup>Required</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeOpenflowRuntimesConfig <a name="DataSnowflakeOpenflowRuntimesConfig" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_runtimes

dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  in: DataSnowflakeOpenflowRuntimesIn = None,
  like: str = None,
  limit: DataSnowflakeOpenflowRuntimesLimit = None,
  starts_with: str = None,
  with_describe: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#id DataSnowflakeOpenflowRuntimes#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.startsWith">starts_with</a></code> | <code>str</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC OPENFLOW RUNTIME for each runtime returned by SHOW OPENFLOW RUNTIMES. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#id DataSnowflakeOpenflowRuntimes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.in"></a>

```python
in: DataSnowflakeOpenflowRuntimesIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#in DataSnowflakeOpenflowRuntimes#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.like"></a>

```python
like: str
```

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#like DataSnowflakeOpenflowRuntimes#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.limit"></a>

```python
limit: DataSnowflakeOpenflowRuntimesLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#limit DataSnowflakeOpenflowRuntimes#limit}

---

##### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#starts_with DataSnowflakeOpenflowRuntimes#starts_with}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs DESC OPENFLOW RUNTIME for each runtime returned by SHOW OPENFLOW RUNTIMES.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#with_describe DataSnowflakeOpenflowRuntimes#with_describe}

---

### DataSnowflakeOpenflowRuntimesIn <a name="DataSnowflakeOpenflowRuntimesIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_runtimes

dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn(
  account: bool | IResolvable = None,
  database: str = None,
  schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.account">account</a></code> | <code>bool \| cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.database">database</a></code> | <code>str</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.schema">schema</a></code> | <code>str</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.account"></a>

```python
account: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#account DataSnowflakeOpenflowRuntimes#account}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.database"></a>

```python
database: str
```

- *Type:* str

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#database DataSnowflakeOpenflowRuntimes#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.schema"></a>

```python
schema: str
```

- *Type:* str

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#schema DataSnowflakeOpenflowRuntimes#schema}

---

### DataSnowflakeOpenflowRuntimesLimit <a name="DataSnowflakeOpenflowRuntimesLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_runtimes

dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit(
  rows: typing.Union[int, float],
  from: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.property.from">from</a></code> | <code>str</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#rows DataSnowflakeOpenflowRuntimes#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.property.from"></a>

```python
from: str
```

- *Type:* str

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#from DataSnowflakeOpenflowRuntimes#from}

---

### DataSnowflakeOpenflowRuntimesOpenflowRuntimes <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimes.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_runtimes

dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimes()
```


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_runtimes

dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput()
```


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_runtimes

dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput()
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeOpenflowRuntimesInOutputReference <a name="DataSnowflakeOpenflowRuntimesInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_runtimes

dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetAccount">reset_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetSchema">reset_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account` <a name="reset_account" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetAccount"></a>

```python
def reset_account() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.accountInput">account_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.account">account</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_input`<sup>Optional</sup> <a name="account_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.accountInput"></a>

```python
account_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.account"></a>

```python
account: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeOpenflowRuntimesIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a>

---


### DataSnowflakeOpenflowRuntimesLimitOutputReference <a name="DataSnowflakeOpenflowRuntimesLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_runtimes

dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resetFrom">reset_from</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from` <a name="reset_from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.rowsInput">rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `rows_input`<sup>Optional</sup> <a name="rows_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.rowsInput"></a>

```python
rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeOpenflowRuntimesLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a>

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_runtimes

dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_runtimes

dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.deployment">deployment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.executeAsRole">execute_as_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.initiallySuspended">initially_suspended</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.maxNodes">max_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.minNodes">min_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.nodeTypeTier">node_type_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.serverUrl">server_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput">DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.deployment"></a>

```python
deployment: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `execute_as_role`<sup>Required</sup> <a name="execute_as_role" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.executeAsRole"></a>

```python
execute_as_role: str
```

- *Type:* str

---

##### `external_access_integrations`<sup>Required</sup> <a name="external_access_integrations" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.externalAccessIntegrations"></a>

```python
external_access_integrations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `initially_suspended`<sup>Required</sup> <a name="initially_suspended" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.initiallySuspended"></a>

```python
initially_suspended: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `max_nodes`<sup>Required</sup> <a name="max_nodes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.maxNodes"></a>

```python
max_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_nodes`<sup>Required</sup> <a name="min_nodes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.minNodes"></a>

```python
min_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `node_type_tier`<sup>Required</sup> <a name="node_type_tier" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.nodeTypeTier"></a>

```python
node_type_tier: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `server_url`<sup>Required</sup> <a name="server_url" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.serverUrl"></a>

```python
server_url: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput">DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput</a>

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesList <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_runtimes

dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_runtimes

dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimes">DataSnowflakeOpenflowRuntimesOpenflowRuntimes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.describeOutput"></a>

```python
describe_output: DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.showOutput"></a>

```python
show_output: DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeOpenflowRuntimesOpenflowRuntimes
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimes">DataSnowflakeOpenflowRuntimesOpenflowRuntimes</a>

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_runtimes

dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_runtimes

dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.deployment">deployment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.executeAsRole">execute_as_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.initiallySuspended">initially_suspended</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.maxNodes">max_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.minNodes">min_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.updatedOn">updated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput">DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.deployment"></a>

```python
deployment: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `execute_as_role`<sup>Required</sup> <a name="execute_as_role" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.executeAsRole"></a>

```python
execute_as_role: str
```

- *Type:* str

---

##### `external_access_integrations`<sup>Required</sup> <a name="external_access_integrations" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.externalAccessIntegrations"></a>

```python
external_access_integrations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `initially_suspended`<sup>Required</sup> <a name="initially_suspended" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.initiallySuspended"></a>

```python
initially_suspended: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `max_nodes`<sup>Required</sup> <a name="max_nodes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.maxNodes"></a>

```python
max_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_nodes`<sup>Required</sup> <a name="min_nodes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.minNodes"></a>

```python
min_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `updated_on`<sup>Required</sup> <a name="updated_on" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.updatedOn"></a>

```python
updated_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput">DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput</a>

---



