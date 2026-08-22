# `dataSnowflakeStorageLifecyclePolicies` Submodule <a name="`dataSnowflakeStorageLifecyclePolicies` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeStorageLifecyclePolicies <a name="DataSnowflakeStorageLifecyclePolicies" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies snowflake_storage_lifecycle_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_storage_lifecycle_policies

dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies(
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
  in: DataSnowflakeStorageLifecyclePoliciesIn = None,
  like: str = None,
  with_describe: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#id DataSnowflakeStorageLifecyclePolicies#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC STORAGE LIFECYCLE POLICY for each storage lifecycle policy returned by SHOW STORAGE LIFECYCLE POLICIES. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#id DataSnowflakeStorageLifecyclePolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.in"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#in DataSnowflakeStorageLifecyclePolicies#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.like"></a>

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#like DataSnowflakeStorageLifecyclePolicies#like}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.withDescribe"></a>

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs DESC STORAGE LIFECYCLE POLICY for each storage lifecycle policy returned by SHOW STORAGE LIFECYCLE POLICIES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#with_describe DataSnowflakeStorageLifecyclePolicies#with_describe}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.putIn">put_in</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetIn">reset_in</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetLike">reset_like</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetWithDescribe">reset_with_describe</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_in` <a name="put_in" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.putIn"></a>

```python
def put_in(
  account: bool | IResolvable = None,
  database: str = None,
  schema: str = None
) -> None
```

###### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.putIn.parameter.account"></a>

- *Type:* bool | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#account DataSnowflakeStorageLifecyclePolicies#account}

---

###### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.putIn.parameter.database"></a>

- *Type:* str

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#database DataSnowflakeStorageLifecyclePolicies#database}

---

###### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.putIn.parameter.schema"></a>

- *Type:* str

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#schema DataSnowflakeStorageLifecyclePolicies#schema}

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_in` <a name="reset_in" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetIn"></a>

```python
def reset_in() -> None
```

##### `reset_like` <a name="reset_like" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetLike"></a>

```python
def reset_like() -> None
```

##### `reset_with_describe` <a name="reset_with_describe" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetWithDescribe"></a>

```python
def reset_with_describe() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataSnowflakeStorageLifecyclePolicies resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isConstruct"></a>

```python
from cdktn_provider_snowflake import data_snowflake_storage_lifecycle_policies

dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import data_snowflake_storage_lifecycle_policies

dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformDataSource"></a>

```python
from cdktn_provider_snowflake import data_snowflake_storage_lifecycle_policies

dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import data_snowflake_storage_lifecycle_policies

dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataSnowflakeStorageLifecyclePolicies resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSnowflakeStorageLifecyclePolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSnowflakeStorageLifecyclePolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeStorageLifecyclePolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference">DataSnowflakeStorageLifecyclePoliciesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.storageLifecyclePolicies">storage_lifecycle_policies</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.inInput">in_input</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.likeInput">like_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.withDescribeInput">with_describe_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.like">like</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.in"></a>

```python
in: DataSnowflakeStorageLifecyclePoliciesInOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference">DataSnowflakeStorageLifecyclePoliciesInOutputReference</a>

---

##### `storage_lifecycle_policies`<sup>Required</sup> <a name="storage_lifecycle_policies" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.storageLifecyclePolicies"></a>

```python
storage_lifecycle_policies: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `in_input`<sup>Optional</sup> <a name="in_input" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.inInput"></a>

```python
in_input: DataSnowflakeStorageLifecyclePoliciesIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a>

---

##### `like_input`<sup>Optional</sup> <a name="like_input" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.likeInput"></a>

```python
like_input: str
```

- *Type:* str

---

##### `with_describe_input`<sup>Optional</sup> <a name="with_describe_input" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.withDescribeInput"></a>

```python
with_describe_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.like"></a>

```python
like: str
```

- *Type:* str

---

##### `with_describe`<sup>Required</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeStorageLifecyclePoliciesConfig <a name="DataSnowflakeStorageLifecyclePoliciesConfig" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_storage_lifecycle_policies

dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  in: DataSnowflakeStorageLifecyclePoliciesIn = None,
  like: str = None,
  with_describe: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#id DataSnowflakeStorageLifecyclePolicies#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC STORAGE LIFECYCLE POLICY for each storage lifecycle policy returned by SHOW STORAGE LIFECYCLE POLICIES. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#id DataSnowflakeStorageLifecyclePolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.in"></a>

```python
in: DataSnowflakeStorageLifecyclePoliciesIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#in DataSnowflakeStorageLifecyclePolicies#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.like"></a>

```python
like: str
```

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#like DataSnowflakeStorageLifecyclePolicies#like}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs DESC STORAGE LIFECYCLE POLICY for each storage lifecycle policy returned by SHOW STORAGE LIFECYCLE POLICIES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#with_describe DataSnowflakeStorageLifecyclePolicies#with_describe}

---

### DataSnowflakeStorageLifecyclePoliciesIn <a name="DataSnowflakeStorageLifecyclePoliciesIn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_storage_lifecycle_policies

dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn(
  account: bool | IResolvable = None,
  database: str = None,
  schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.property.account">account</a></code> | <code>bool \| cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.property.database">database</a></code> | <code>str</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.property.schema">schema</a></code> | <code>str</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.property.account"></a>

```python
account: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#account DataSnowflakeStorageLifecyclePolicies#account}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.property.database"></a>

```python
database: str
```

- *Type:* str

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#database DataSnowflakeStorageLifecyclePolicies#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.property.schema"></a>

```python
schema: str
```

- *Type:* str

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#schema DataSnowflakeStorageLifecyclePolicies#schema}

---

### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_storage_lifecycle_policies

dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies()
```


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_storage_lifecycle_policies

dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput()
```


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_storage_lifecycle_policies

dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature()
```


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_storage_lifecycle_policies

dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput()
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeStorageLifecyclePoliciesInOutputReference <a name="DataSnowflakeStorageLifecyclePoliciesInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_storage_lifecycle_policies

dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resetAccount">reset_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resetSchema">reset_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account` <a name="reset_account" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resetAccount"></a>

```python
def reset_account() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.accountInput">account_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.account">account</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_input`<sup>Optional</sup> <a name="account_input" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.accountInput"></a>

```python
account_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.account"></a>

```python
account: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeStorageLifecyclePoliciesIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a>

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_storage_lifecycle_policies

dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_storage_lifecycle_policies

dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.archiveForDays">archive_for_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.archiveTier">archive_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.returnType">return_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.signature">signature</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `archive_for_days`<sup>Required</sup> <a name="archive_for_days" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.archiveForDays"></a>

```python
archive_for_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `archive_tier`<sup>Required</sup> <a name="archive_tier" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.archiveTier"></a>

```python
archive_tier: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `return_type`<sup>Required</sup> <a name="return_type" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.returnType"></a>

```python
return_type: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.signature"></a>

```python
signature: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput</a>

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_storage_lifecycle_policies

dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_storage_lifecycle_policies

dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature</a>

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_storage_lifecycle_policies

dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_storage_lifecycle_policies

dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.describeOutput"></a>

```python
describe_output: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.showOutput"></a>

```python
show_output: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies</a>

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_storage_lifecycle_policies

dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_storage_lifecycle_policies

dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.options">options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.options"></a>

```python
options: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput</a>

---



