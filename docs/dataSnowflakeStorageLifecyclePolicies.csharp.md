# `dataSnowflakeStorageLifecyclePolicies` Submodule <a name="`dataSnowflakeStorageLifecyclePolicies` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeStorageLifecyclePolicies <a name="DataSnowflakeStorageLifecyclePolicies" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies snowflake_storage_lifecycle_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeStorageLifecyclePolicies(Construct Scope, string Id, DataSnowflakeStorageLifecyclePoliciesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig">DataSnowflakeStorageLifecyclePoliciesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig">DataSnowflakeStorageLifecyclePoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.putIn">PutIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetIn">ResetIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetWithDescribe">ResetWithDescribe</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutIn` <a name="PutIn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.putIn"></a>

```csharp
private void PutIn(DataSnowflakeStorageLifecyclePoliciesIn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIn` <a name="ResetIn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetIn"></a>

```csharp
private void ResetIn()
```

##### `ResetLike` <a name="ResetLike" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetLike"></a>

```csharp
private void ResetLike()
```

##### `ResetWithDescribe` <a name="ResetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.resetWithDescribe"></a>

```csharp
private void ResetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeStorageLifecyclePolicies resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeStorageLifecyclePolicies.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeStorageLifecyclePolicies.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeStorageLifecyclePolicies.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeStorageLifecyclePolicies.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataSnowflakeStorageLifecyclePolicies resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeStorageLifecyclePolicies to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeStorageLifecyclePolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeStorageLifecyclePolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.in">In</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference">DataSnowflakeStorageLifecyclePoliciesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.storageLifecyclePolicies">StorageLifecyclePolicies</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.inInput">InInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.likeInput">LikeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.withDescribeInput">WithDescribeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.like">Like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.withDescribe">WithDescribe</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `In`<sup>Required</sup> <a name="In" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.in"></a>

```csharp
public DataSnowflakeStorageLifecyclePoliciesInOutputReference In { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference">DataSnowflakeStorageLifecyclePoliciesInOutputReference</a>

---

##### `StorageLifecyclePolicies`<sup>Required</sup> <a name="StorageLifecyclePolicies" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.storageLifecyclePolicies"></a>

```csharp
public DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList StorageLifecyclePolicies { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InInput`<sup>Optional</sup> <a name="InInput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.inInput"></a>

```csharp
public DataSnowflakeStorageLifecyclePoliciesIn InInput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a>

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.likeInput"></a>

```csharp
public string LikeInput { get; }
```

- *Type:* string

---

##### `WithDescribeInput`<sup>Optional</sup> <a name="WithDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.withDescribeInput"></a>

```csharp
public bool|IResolvable WithDescribeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.like"></a>

```csharp
public string Like { get; }
```

- *Type:* string

---

##### `WithDescribe`<sup>Required</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.withDescribe"></a>

```csharp
public bool|IResolvable WithDescribe { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePolicies.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeStorageLifecyclePoliciesConfig <a name="DataSnowflakeStorageLifecyclePoliciesConfig" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeStorageLifecyclePoliciesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    DataSnowflakeStorageLifecyclePoliciesIn In = null,
    string Like = null,
    bool|IResolvable WithDescribe = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#id DataSnowflakeStorageLifecyclePolicies#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.in">In</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.like">Like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.withDescribe">WithDescribe</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Default: `true`) Runs DESC STORAGE LIFECYCLE POLICY for each storage lifecycle policy returned by SHOW STORAGE LIFECYCLE POLICIES. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#id DataSnowflakeStorageLifecyclePolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `In`<sup>Optional</sup> <a name="In" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.in"></a>

```csharp
public DataSnowflakeStorageLifecyclePoliciesIn In { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#in DataSnowflakeStorageLifecyclePolicies#in}

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.like"></a>

```csharp
public string Like { get; set; }
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#like DataSnowflakeStorageLifecyclePolicies#like}

---

##### `WithDescribe`<sup>Optional</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesConfig.property.withDescribe"></a>

```csharp
public bool|IResolvable WithDescribe { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Default: `true`) Runs DESC STORAGE LIFECYCLE POLICY for each storage lifecycle policy returned by SHOW STORAGE LIFECYCLE POLICIES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#with_describe DataSnowflakeStorageLifecyclePolicies#with_describe}

---

### DataSnowflakeStorageLifecyclePoliciesIn <a name="DataSnowflakeStorageLifecyclePoliciesIn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeStorageLifecyclePoliciesIn {
    bool|IResolvable Account = null,
    string Database = null,
    string Schema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.property.account">Account</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.property.database">Database</a></code> | <code>string</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.property.schema">Schema</a></code> | <code>string</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.property.account"></a>

```csharp
public bool|IResolvable Account { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#account DataSnowflakeStorageLifecyclePolicies#account}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#database DataSnowflakeStorageLifecyclePolicies#database}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/storage_lifecycle_policies#schema DataSnowflakeStorageLifecyclePolicies#schema}

---

### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies {

};
```


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput {

};
```


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature {

};
```


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeStorageLifecyclePoliciesInOutputReference <a name="DataSnowflakeStorageLifecyclePoliciesInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeStorageLifecyclePoliciesInOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccount` <a name="ResetAccount" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resetAccount"></a>

```csharp
private void ResetAccount()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.resetSchema"></a>

```csharp
private void ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.accountInput">AccountInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.account">Account</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.accountInput"></a>

```csharp
public bool|IResolvable AccountInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.account"></a>

```csharp
public bool|IResolvable Account { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesInOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeStorageLifecyclePoliciesIn InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesIn">DataSnowflakeStorageLifecyclePoliciesIn</a>

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.get"></a>

```csharp
private DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.archiveForDays">ArchiveForDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.archiveTier">ArchiveTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.returnType">ReturnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.signature">Signature</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchiveForDays`<sup>Required</sup> <a name="ArchiveForDays" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.archiveForDays"></a>

```csharp
public double ArchiveForDays { get; }
```

- *Type:* double

---

##### `ArchiveTier`<sup>Required</sup> <a name="ArchiveTier" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.archiveTier"></a>

```csharp
public string ArchiveTier { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReturnType`<sup>Required</sup> <a name="ReturnType" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.returnType"></a>

```csharp
public string ReturnType { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.signature"></a>

```csharp
public DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList Signature { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput</a>

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.get"></a>

```csharp
private DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature</a>

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.get"></a>

```csharp
private DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.describeOutput"></a>

```csharp
public DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.showOutput"></a>

```csharp
public DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies</a>

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.get"></a>

```csharp
private DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference <a name="DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.options">Options</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.options"></a>

```csharp
public string Options { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeStorageLifecyclePolicies.DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput">DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput</a>

---



