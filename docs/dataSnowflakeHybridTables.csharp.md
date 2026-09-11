# `dataSnowflakeHybridTables` Submodule <a name="`dataSnowflakeHybridTables` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeHybridTables <a name="DataSnowflakeHybridTables" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables snowflake_hybrid_tables}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTables(Construct Scope, string Id, DataSnowflakeHybridTablesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig">DataSnowflakeHybridTablesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig">DataSnowflakeHybridTablesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putIn">PutIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putLimit">PutLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetIn">ResetIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetStartsWith">ResetStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithDescribe">ResetWithDescribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithIndexes">ResetWithIndexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithKeys">ResetWithKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithParameters">ResetWithParameters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutIn` <a name="PutIn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putIn"></a>

```csharp
private void PutIn(DataSnowflakeHybridTablesIn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a>

---

##### `PutLimit` <a name="PutLimit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putLimit"></a>

```csharp
private void PutLimit(DataSnowflakeHybridTablesLimit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIn` <a name="ResetIn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetIn"></a>

```csharp
private void ResetIn()
```

##### `ResetLike` <a name="ResetLike" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetLike"></a>

```csharp
private void ResetLike()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetLimit"></a>

```csharp
private void ResetLimit()
```

##### `ResetStartsWith` <a name="ResetStartsWith" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetStartsWith"></a>

```csharp
private void ResetStartsWith()
```

##### `ResetWithDescribe` <a name="ResetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithDescribe"></a>

```csharp
private void ResetWithDescribe()
```

##### `ResetWithIndexes` <a name="ResetWithIndexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithIndexes"></a>

```csharp
private void ResetWithIndexes()
```

##### `ResetWithKeys` <a name="ResetWithKeys" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithKeys"></a>

```csharp
private void ResetWithKeys()
```

##### `ResetWithParameters` <a name="ResetWithParameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithParameters"></a>

```csharp
private void ResetWithParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeHybridTables resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeHybridTables.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeHybridTables.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeHybridTables.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeHybridTables.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataSnowflakeHybridTables resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeHybridTables to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeHybridTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeHybridTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.hybridTables">HybridTables</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList">DataSnowflakeHybridTablesHybridTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.in">In</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference">DataSnowflakeHybridTablesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.limit">Limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference">DataSnowflakeHybridTablesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.inInput">InInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.likeInput">LikeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.limitInput">LimitInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.startsWithInput">StartsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withDescribeInput">WithDescribeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withIndexesInput">WithIndexesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withKeysInput">WithKeysInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withParametersInput">WithParametersInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.like">Like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.startsWith">StartsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withDescribe">WithDescribe</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withIndexes">WithIndexes</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withKeys">WithKeys</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withParameters">WithParameters</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `HybridTables`<sup>Required</sup> <a name="HybridTables" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.hybridTables"></a>

```csharp
public DataSnowflakeHybridTablesHybridTablesList HybridTables { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList">DataSnowflakeHybridTablesHybridTablesList</a>

---

##### `In`<sup>Required</sup> <a name="In" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.in"></a>

```csharp
public DataSnowflakeHybridTablesInOutputReference In { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference">DataSnowflakeHybridTablesInOutputReference</a>

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.limit"></a>

```csharp
public DataSnowflakeHybridTablesLimitOutputReference Limit { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference">DataSnowflakeHybridTablesLimitOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InInput`<sup>Optional</sup> <a name="InInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.inInput"></a>

```csharp
public DataSnowflakeHybridTablesIn InInput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a>

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.likeInput"></a>

```csharp
public string LikeInput { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.limitInput"></a>

```csharp
public DataSnowflakeHybridTablesLimit LimitInput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a>

---

##### `StartsWithInput`<sup>Optional</sup> <a name="StartsWithInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.startsWithInput"></a>

```csharp
public string StartsWithInput { get; }
```

- *Type:* string

---

##### `WithDescribeInput`<sup>Optional</sup> <a name="WithDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withDescribeInput"></a>

```csharp
public bool|IResolvable WithDescribeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WithIndexesInput`<sup>Optional</sup> <a name="WithIndexesInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withIndexesInput"></a>

```csharp
public bool|IResolvable WithIndexesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WithKeysInput`<sup>Optional</sup> <a name="WithKeysInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withKeysInput"></a>

```csharp
public bool|IResolvable WithKeysInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WithParametersInput`<sup>Optional</sup> <a name="WithParametersInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withParametersInput"></a>

```csharp
public bool|IResolvable WithParametersInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.like"></a>

```csharp
public string Like { get; }
```

- *Type:* string

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.startsWith"></a>

```csharp
public string StartsWith { get; }
```

- *Type:* string

---

##### `WithDescribe`<sup>Required</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withDescribe"></a>

```csharp
public bool|IResolvable WithDescribe { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WithIndexes`<sup>Required</sup> <a name="WithIndexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withIndexes"></a>

```csharp
public bool|IResolvable WithIndexes { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WithKeys`<sup>Required</sup> <a name="WithKeys" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withKeys"></a>

```csharp
public bool|IResolvable WithKeys { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WithParameters`<sup>Required</sup> <a name="WithParameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withParameters"></a>

```csharp
public bool|IResolvable WithParameters { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeHybridTablesConfig <a name="DataSnowflakeHybridTablesConfig" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    DataSnowflakeHybridTablesIn In = null,
    string Like = null,
    DataSnowflakeHybridTablesLimit Limit = null,
    string StartsWith = null,
    bool|IResolvable WithDescribe = null,
    bool|IResolvable WithIndexes = null,
    bool|IResolvable WithKeys = null,
    bool|IResolvable WithParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#id DataSnowflakeHybridTables#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.in">In</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.like">Like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.limit">Limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.startsWith">StartsWith</a></code> | <code>string</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withDescribe">WithDescribe</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Default: `true`) Runs DESC TABLE for each hybrid table returned by SHOW HYBRID TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withIndexes">WithIndexes</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Default: `false`) Runs SHOW INDEXES for each hybrid table returned by SHOW HYBRID TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withKeys">WithKeys</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Default: `false`) Runs SHOW PRIMARY KEYS, SHOW UNIQUE KEYS, and SHOW IMPORTED KEYS for each hybrid table returned by SHOW HYBRID TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withParameters">WithParameters</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Default: `true`) Runs SHOW PARAMETERS FOR TABLE for each hybrid table returned by SHOW HYBRID TABLES. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#id DataSnowflakeHybridTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `In`<sup>Optional</sup> <a name="In" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.in"></a>

```csharp
public DataSnowflakeHybridTablesIn In { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#in DataSnowflakeHybridTables#in}

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.like"></a>

```csharp
public string Like { get; set; }
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#like DataSnowflakeHybridTables#like}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.limit"></a>

```csharp
public DataSnowflakeHybridTablesLimit Limit { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#limit DataSnowflakeHybridTables#limit}

---

##### `StartsWith`<sup>Optional</sup> <a name="StartsWith" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.startsWith"></a>

```csharp
public string StartsWith { get; set; }
```

- *Type:* string

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#starts_with DataSnowflakeHybridTables#starts_with}

---

##### `WithDescribe`<sup>Optional</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withDescribe"></a>

```csharp
public bool|IResolvable WithDescribe { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Default: `true`) Runs DESC TABLE for each hybrid table returned by SHOW HYBRID TABLES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_describe DataSnowflakeHybridTables#with_describe}

---

##### `WithIndexes`<sup>Optional</sup> <a name="WithIndexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withIndexes"></a>

```csharp
public bool|IResolvable WithIndexes { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Default: `false`) Runs SHOW INDEXES for each hybrid table returned by SHOW HYBRID TABLES.

The output is saved to the show_indexes field. By default this value is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_indexes DataSnowflakeHybridTables#with_indexes}

---

##### `WithKeys`<sup>Optional</sup> <a name="WithKeys" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withKeys"></a>

```csharp
public bool|IResolvable WithKeys { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Default: `false`) Runs SHOW PRIMARY KEYS, SHOW UNIQUE KEYS, and SHOW IMPORTED KEYS for each hybrid table returned by SHOW HYBRID TABLES.

The merged constraints are saved to the show_keys_output field, grouped by constraint name and ordered by kind, then by column names. By default this value is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_keys DataSnowflakeHybridTables#with_keys}

---

##### `WithParameters`<sup>Optional</sup> <a name="WithParameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withParameters"></a>

```csharp
public bool|IResolvable WithParameters { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Default: `true`) Runs SHOW PARAMETERS FOR TABLE for each hybrid table returned by SHOW HYBRID TABLES.

The output is saved to the parameters field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_parameters DataSnowflakeHybridTables#with_parameters}

---

### DataSnowflakeHybridTablesHybridTables <a name="DataSnowflakeHybridTablesHybridTables" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesHybridTables {

};
```


### DataSnowflakeHybridTablesHybridTablesDescribeOutput <a name="DataSnowflakeHybridTablesHybridTablesDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesHybridTablesDescribeOutput {

};
```


### DataSnowflakeHybridTablesHybridTablesParameters <a name="DataSnowflakeHybridTablesHybridTablesParameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesHybridTablesParameters {

};
```


### DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays <a name="DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays {

};
```


### DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays <a name="DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays {

};
```


### DataSnowflakeHybridTablesHybridTablesShowIndexes <a name="DataSnowflakeHybridTablesHybridTablesShowIndexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesHybridTablesShowIndexes {

};
```


### DataSnowflakeHybridTablesHybridTablesShowKeysOutput <a name="DataSnowflakeHybridTablesHybridTablesShowKeysOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesHybridTablesShowKeysOutput {

};
```


### DataSnowflakeHybridTablesHybridTablesShowOutput <a name="DataSnowflakeHybridTablesHybridTablesShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesHybridTablesShowOutput {

};
```


### DataSnowflakeHybridTablesIn <a name="DataSnowflakeHybridTablesIn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesIn {
    bool|IResolvable Account = null,
    string Database = null,
    string Schema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.account">Account</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.database">Database</a></code> | <code>string</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.schema">Schema</a></code> | <code>string</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.account"></a>

```csharp
public bool|IResolvable Account { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#account DataSnowflakeHybridTables#account}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#database DataSnowflakeHybridTables#database}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#schema DataSnowflakeHybridTables#schema}

---

### DataSnowflakeHybridTablesLimit <a name="DataSnowflakeHybridTablesLimit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesLimit {
    double Rows,
    string From = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.property.rows">Rows</a></code> | <code>double</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.property.from">From</a></code> | <code>string</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.property.rows"></a>

```csharp
public double Rows { get; set; }
```

- *Type:* double

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#rows DataSnowflakeHybridTables#rows}

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#from DataSnowflakeHybridTables#from}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeHybridTablesHybridTablesDescribeOutputList <a name="DataSnowflakeHybridTablesHybridTablesDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesHybridTablesDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.get"></a>

```csharp
private DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference <a name="DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.check">Check</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.collation">Collation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.isNullable">IsNullable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.policyName">PolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.primaryKey">PrimaryKey</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.privacyDomain">PrivacyDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.schemaEvolutionRecord">SchemaEvolutionRecord</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.uniqueKey">UniqueKey</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutput">DataSnowflakeHybridTablesHybridTablesDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Check`<sup>Required</sup> <a name="Check" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.check"></a>

```csharp
public string Check { get; }
```

- *Type:* string

---

##### `Collation`<sup>Required</sup> <a name="Collation" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.collation"></a>

```csharp
public string Collation { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `IsNullable`<sup>Required</sup> <a name="IsNullable" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.isNullable"></a>

```csharp
public IResolvable IsNullable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.policyName"></a>

```csharp
public string PolicyName { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.primaryKey"></a>

```csharp
public IResolvable PrimaryKey { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `PrivacyDomain`<sup>Required</sup> <a name="PrivacyDomain" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.privacyDomain"></a>

```csharp
public string PrivacyDomain { get; }
```

- *Type:* string

---

##### `SchemaEvolutionRecord`<sup>Required</sup> <a name="SchemaEvolutionRecord" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.schemaEvolutionRecord"></a>

```csharp
public string SchemaEvolutionRecord { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UniqueKey`<sup>Required</sup> <a name="UniqueKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.uniqueKey"></a>

```csharp
public IResolvable UniqueKey { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeHybridTablesHybridTablesDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutput">DataSnowflakeHybridTablesHybridTablesDescribeOutput</a>

---


### DataSnowflakeHybridTablesHybridTablesList <a name="DataSnowflakeHybridTablesHybridTablesList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesHybridTablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.get"></a>

```csharp
private DataSnowflakeHybridTablesHybridTablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeHybridTablesHybridTablesOutputReference <a name="DataSnowflakeHybridTablesHybridTablesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesHybridTablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList">DataSnowflakeHybridTablesHybridTablesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList">DataSnowflakeHybridTablesHybridTablesParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showIndexes">ShowIndexes</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList">DataSnowflakeHybridTablesHybridTablesShowIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showKeysOutput">ShowKeysOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList">DataSnowflakeHybridTablesHybridTablesShowKeysOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList">DataSnowflakeHybridTablesHybridTablesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTables">DataSnowflakeHybridTablesHybridTables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.describeOutput"></a>

```csharp
public DataSnowflakeHybridTablesHybridTablesDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList">DataSnowflakeHybridTablesHybridTablesDescribeOutputList</a>

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.parameters"></a>

```csharp
public DataSnowflakeHybridTablesHybridTablesParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList">DataSnowflakeHybridTablesHybridTablesParametersList</a>

---

##### `ShowIndexes`<sup>Required</sup> <a name="ShowIndexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showIndexes"></a>

```csharp
public DataSnowflakeHybridTablesHybridTablesShowIndexesList ShowIndexes { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList">DataSnowflakeHybridTablesHybridTablesShowIndexesList</a>

---

##### `ShowKeysOutput`<sup>Required</sup> <a name="ShowKeysOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showKeysOutput"></a>

```csharp
public DataSnowflakeHybridTablesHybridTablesShowKeysOutputList ShowKeysOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList">DataSnowflakeHybridTablesHybridTablesShowKeysOutputList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showOutput"></a>

```csharp
public DataSnowflakeHybridTablesHybridTablesShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList">DataSnowflakeHybridTablesHybridTablesShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeHybridTablesHybridTables InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTables">DataSnowflakeHybridTablesHybridTables</a>

---


### DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList <a name="DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.get"></a>

```csharp
private DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference <a name="DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays">DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays">DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays</a>

---


### DataSnowflakeHybridTablesHybridTablesParametersList <a name="DataSnowflakeHybridTablesHybridTablesParametersList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesHybridTablesParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.get"></a>

```csharp
private DataSnowflakeHybridTablesHybridTablesParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList <a name="DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.get"></a>

```csharp
private DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference <a name="DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays">DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays">DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays</a>

---


### DataSnowflakeHybridTablesHybridTablesParametersOutputReference <a name="DataSnowflakeHybridTablesHybridTablesParametersOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesHybridTablesParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.dataRetentionTimeInDays">DataRetentionTimeInDays</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList">DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.maxDataExtensionTimeInDays">MaxDataExtensionTimeInDays</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList">DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParameters">DataSnowflakeHybridTablesHybridTablesParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataRetentionTimeInDays`<sup>Required</sup> <a name="DataRetentionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.dataRetentionTimeInDays"></a>

```csharp
public DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList DataRetentionTimeInDays { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList">DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList</a>

---

##### `MaxDataExtensionTimeInDays`<sup>Required</sup> <a name="MaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.maxDataExtensionTimeInDays"></a>

```csharp
public DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList MaxDataExtensionTimeInDays { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList">DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeHybridTablesHybridTablesParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParameters">DataSnowflakeHybridTablesHybridTablesParameters</a>

---


### DataSnowflakeHybridTablesHybridTablesShowIndexesList <a name="DataSnowflakeHybridTablesHybridTablesShowIndexesList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesHybridTablesShowIndexesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.get"></a>

```csharp
private DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference <a name="DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.columns">Columns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.includedColumns">IncludedColumns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.isUnique">IsUnique</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexes">DataSnowflakeHybridTablesHybridTablesShowIndexes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.columns"></a>

```csharp
public string Columns { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `IncludedColumns`<sup>Required</sup> <a name="IncludedColumns" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.includedColumns"></a>

```csharp
public string IncludedColumns { get; }
```

- *Type:* string

---

##### `IsUnique`<sup>Required</sup> <a name="IsUnique" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.isUnique"></a>

```csharp
public IResolvable IsUnique { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeHybridTablesHybridTablesShowIndexes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexes">DataSnowflakeHybridTablesHybridTablesShowIndexes</a>

---


### DataSnowflakeHybridTablesHybridTablesShowKeysOutputList <a name="DataSnowflakeHybridTablesHybridTablesShowKeysOutputList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesHybridTablesShowKeysOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.get"></a>

```csharp
private DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference <a name="DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.columns">Columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.deleteRule">DeleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.referencedColumns">ReferencedColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.referencedTable">ReferencedTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.updateRule">UpdateRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutput">DataSnowflakeHybridTablesHybridTablesShowKeysOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.columns"></a>

```csharp
public string[] Columns { get; }
```

- *Type:* string[]

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.deleteRule"></a>

```csharp
public string DeleteRule { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReferencedColumns`<sup>Required</sup> <a name="ReferencedColumns" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.referencedColumns"></a>

```csharp
public string[] ReferencedColumns { get; }
```

- *Type:* string[]

---

##### `ReferencedTable`<sup>Required</sup> <a name="ReferencedTable" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.referencedTable"></a>

```csharp
public string ReferencedTable { get; }
```

- *Type:* string

---

##### `UpdateRule`<sup>Required</sup> <a name="UpdateRule" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.updateRule"></a>

```csharp
public string UpdateRule { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeHybridTablesHybridTablesShowKeysOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutput">DataSnowflakeHybridTablesHybridTablesShowKeysOutput</a>

---


### DataSnowflakeHybridTablesHybridTablesShowOutputList <a name="DataSnowflakeHybridTablesHybridTablesShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesHybridTablesShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.get"></a>

```csharp
private DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference <a name="DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.bytes">Bytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.rows">Rows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutput">DataSnowflakeHybridTablesHybridTablesShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bytes`<sup>Required</sup> <a name="Bytes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.bytes"></a>

```csharp
public double Bytes { get; }
```

- *Type:* double

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.rows"></a>

```csharp
public double Rows { get; }
```

- *Type:* double

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeHybridTablesHybridTablesShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutput">DataSnowflakeHybridTablesHybridTablesShowOutput</a>

---


### DataSnowflakeHybridTablesInOutputReference <a name="DataSnowflakeHybridTablesInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesInOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccount` <a name="ResetAccount" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetAccount"></a>

```csharp
private void ResetAccount()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetSchema"></a>

```csharp
private void ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.accountInput">AccountInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.account">Account</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.accountInput"></a>

```csharp
public bool|IResolvable AccountInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.account"></a>

```csharp
public bool|IResolvable Account { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeHybridTablesIn InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a>

---


### DataSnowflakeHybridTablesLimitOutputReference <a name="DataSnowflakeHybridTablesLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeHybridTablesLimitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.rowsInput">RowsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.rows">Rows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `RowsInput`<sup>Optional</sup> <a name="RowsInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.rowsInput"></a>

```csharp
public double RowsInput { get; }
```

- *Type:* double

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.rows"></a>

```csharp
public double Rows { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeHybridTablesLimit InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a>

---



